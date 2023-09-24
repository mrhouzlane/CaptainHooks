// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;
import {IPoolManager} from "./v4-core/interfaces/IPoolManager.sol";
import {UniversalHook} from "./UniversalHook.sol";
import {Ownable} from "openzeppelin-contracts/access/Ownable.sol";
import {EnumerableSet} from "openzeppelin-contracts/utils/structs/EnumerableSet.sol";

interface IOwnable {
    function transferOwnership(address newOwner) external;
}

contract UniversalHookFactory is Ownable {
    event HookCreated(address owner, address hookAddr);
    IPoolManager public immutable manager;
    bytes32[] public availableSalts;
    using EnumerableSet for EnumerableSet.Bytes32Set;
    EnumerableSet.Bytes32Set private _registeredSalts;
    bytes32 private hashedKey;

    constructor(IPoolManager _manager) {
        manager = _manager;
    }

    // use next available salt
    function deploy(
        string memory key
    ) external returns (address contractDeployed) {
        require(keccak256(bytes(key)) == (hashedKey), "Invalid key");
        bytes32 salt = _consumeNextSalt();
        contractDeployed = address(new UniversalHook{salt: salt}(manager));
        IOwnable(contractDeployed).transferOwnership(msg.sender);
        emit HookCreated(msg.sender, contractDeployed);
    }

    function addSalts(uint256[] memory saltsUints) external onlyOwner {
        for (uint256 i = 0; i < saltsUints.length; i++) {
            bytes32 salt = bytes32(saltsUints[i]);
            if (!_registeredSalts.contains(salt)) {
                availableSalts.push(salt);
                _registeredSalts.add(salt);
            }
        }
    }

    function getBulkPrecomputeHookAddresses(
        uint256 start,
        uint256 end
    ) external view returns (address[] memory addresses) {
        addresses = new address[](end - start);
        for (uint256 i = start; i < end; i++) {
            addresses[i - start] = getPrecomputedHookAddress(bytes32(i));
        }
    }

    function getPrecomputedHookAddress(
        bytes32 salt
    ) public view returns (address) {
        bytes32 bytecodeHash = keccak256(
            abi.encodePacked(
                type(UniversalHook).creationCode,
                abi.encode(manager)
            )
        );
        bytes32 hash = keccak256(
            abi.encodePacked(bytes1(0xff), address(this), salt, bytecodeHash)
        );
        return address(uint160(uint256(hash)));
    }

    function setHashedKey(bytes32 _hashedKey) external onlyOwner {
        hashedKey = _hashedKey;
    }

    function _consumeNextSalt() internal returns (bytes32 salt) {
        require(availableSalts.length > 0, "No salts available");
        salt = availableSalts[0];
        availableSalts[0] = availableSalts[availableSalts.length - 1];
        availableSalts.pop();
    }

    function getAvailableSalts() external view returns (bytes32[] memory) {
        return availableSalts;
    }
}
