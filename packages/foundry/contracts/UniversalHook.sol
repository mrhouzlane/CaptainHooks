// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

import {IPoolManager} from "./v4-core/interfaces/IPoolManager.sol";
import {IHookFeeManager} from "./v4-core/interfaces/IHookFeeManager.sol";
import {IDynamicFeeManager} from "./v4-core/interfaces/IDynamicFeeManager.sol";
import {Ownable} from "openzeppelin-contracts/access/Ownable.sol";
import {PoolKey} from "./v4-core/types/PoolKey.sol";
import {BalanceDelta} from "./v4-core/types/BalanceDelta.sol";
import {IUniversalHook} from "./interfaces/IUniversalHook.sol";
import {IHooks} from "./v4-core/interfaces/IHooks.sol";
import {console} from "forge-std/console.sol";
import {PoolIdLibrary} from "./v4-core/types/PoolId.sol";
import {PoolId} from "./v4-core/types/PoolId.sol";

// TODO : in SelfFunction calls : add a way to handle reverts, add a way to handle return data
// TODO : in SelfFunction calls : add a way to call the manager functions
// TODO : for SelfFunction calls : modularize it, for demo purpose is everything in one contract.

contract UniversalHook is
    IUniversalHook,
    IHooks,
    IHookFeeManager,
    IDynamicFeeManager,
    Ownable
{
    using PoolIdLibrary for PoolKey;

    IPoolManager public immutable manager;

    mapping(address => mapping(Action => bool)) public whitelistedForAction;
    mapping(address => mapping(Action => bool)) public BlacklistedForAction;
    uint24 generalHookFee;
    mapping(PoolId => uint24) public hookFeeForPool;

    mapping(Action => bytes4[]) public functionsForAction;

    // mapping(Action => address[]) public modulesForAction;

    // mapping(bytes32 => bool) moduleIsOff;

    constructor(IPoolManager _manager) {
        manager = _manager;
    }

    modifier onlyManager() {
        require(msg.sender == address(manager));
        _;
    }

    modifier onlySelf() {
        require(msg.sender == address(this));
        _;
    }

    function setWhitelistedForAction(
        address user,
        Action action,
        bool whitelisted
    ) external onlyOwner {
        whitelistedForAction[user][action] = whitelisted;
    }

    //////////////////////////////////////////////////
    /////////////// SETTER FUNCTIONS /////////////////
    //////////////////////////////////////////////////

    function setBlacklistedForAction(
        address user,
        Action action,
        bool blacklisted
    ) external onlyOwner {
        BlacklistedForAction[user][action] = blacklisted;
    }

    function setFunctionsForAction(
        Action action,
        bytes4[] memory functions
    ) external onlyOwner {
        functionsForAction[action] = functions;
    }

    function setHookFee(uint24 hookFee) external onlyOwner {
        generalHookFee = hookFee;
    }

    function setHookFeeForPool(
        PoolKey calldata key,
        uint24 hookFee
    ) external onlyOwner {
        hookFeeForPool[key.toId()] = hookFee;
    }

    // function setModuleOff(
    //     Action action,
    //     address module,
    //     bool isOff
    // ) external onlyOwner {
    //     moduleIsOff[keccak256(abi.encode(action, module))] = isOff;
    // }

    //////////////////////////////////////////////////
    /////////////// HOOKS FUNCTIONS //////////////////
    //////////////////////////////////////////////////

    function beforeInitialize(
        address sender,
        PoolKey memory key,
        uint160 sqrtPriceX96,
        bytes memory hookData
    ) external override onlyManager returns (bytes4) {
        _executeFunctionsForAction(
            Action.BeforeInitialize,
            abi.encode(
                BeforeInitializeParams(sender, key, sqrtPriceX96, hookData)
            )
        );
        return this.beforeInitialize.selector;
    }

    function afterInitialize(
        address sender,
        PoolKey calldata key,
        uint160 sqrtPriceX96,
        int24 tick,
        bytes calldata hookData
    ) external override onlyManager returns (bytes4) {
        return this.afterInitialize.selector;
    }

    function beforeModifyPosition(
        address sender,
        PoolKey calldata key,
        IPoolManager.ModifyPositionParams calldata params,
        bytes calldata hookData
    ) external onlyManager returns (bytes4) {
        return this.beforeModifyPosition.selector;
    }

    function afterModifyPosition(
        address sender,
        PoolKey calldata key,
        IPoolManager.ModifyPositionParams calldata params,
        BalanceDelta delta,
        bytes calldata hookData
    ) external override onlyManager returns (bytes4) {
        return this.afterModifyPosition.selector;
    }

    function beforeSwap(
        address sender,
        PoolKey calldata key,
        IPoolManager.SwapParams calldata params,
        bytes calldata hookData
    ) external override onlyManager returns (bytes4) {
        return this.beforeSwap.selector;
    }

    function afterSwap(
        address sender,
        PoolKey calldata key,
        IPoolManager.SwapParams calldata params,
        BalanceDelta delta,
        bytes calldata hookData
    ) external override onlyManager returns (bytes4) {
        // _executeFunctionsForAction(Action.AfterSwap, hookData);
        return this.afterSwap.selector;
    }

    function beforeDonate(
        address sender,
        PoolKey calldata key,
        uint256 amount0,
        uint256 amount1,
        bytes calldata hookData
    ) external override onlyManager returns (bytes4) {
        return this.beforeDonate.selector;
    }

    function afterDonate(
        address sender,
        PoolKey calldata key,
        uint256 amount0,
        uint256 amount1,
        bytes calldata hookData
    ) external override onlyManager returns (bytes4) {
        return this.afterDonate.selector;
    }

    //////////////////////////////////////////////////
    ///////////// HOOKS FEE FUNCTIONS ////////////////
    //////////////////////////////////////////////////

    function getFee(
        address sender,
        PoolKey calldata key,
        IPoolManager.SwapParams calldata params,
        bytes calldata data
    ) public override returns (uint24) {
        return 0;
    }

    function getHookFees(
        PoolKey calldata key
    ) external view override returns (uint24 hookFee) {
        return
            hookFeeForPool[key.toId()] > 0
                ? hookFeeForPool[key.toId()]
                : generalHookFee;
    }

    //////////////////////////////////////////////////
    ///////////// PLUGINS FOR ACTIONS ////////////////
    //////////////////////////////////////////////////

    function whitelist_before_initialize(
        bytes memory data
    ) external view onlySelf {
        BeforeInitializeParams memory params = abi.decode(
            data,
            (BeforeInitializeParams)
        );
        require(whitelistedForAction[params.sender][Action.BeforeInitialize]);
    }

    function only_owner_before_initialize(
        bytes memory data
    ) external view onlySelf {
        BeforeInitializeParams memory params = abi.decode(
            data,
            (BeforeInitializeParams)
        );
        require(params.sender == owner());
    }

    function not_blacklisted_before_initialize(
        bytes memory data
    ) external view onlySelf {
        BeforeInitializeParams memory params = abi.decode(
            data,
            (BeforeInitializeParams)
        );
        require(!BlacklistedForAction[params.sender][Action.BeforeInitialize]);
    }

    //////////////////////////////////////////////////
    //////////// INTERNAL CORE FUNCTION //////////////
    //////////////////////////////////////////////////

    function _executeFunctionsForAction(
        Action action,
        bytes memory data
    ) internal {
        bytes4[] memory functionsToExecute = functionsForAction[action];
        for (uint256 i = 0; i < functionsToExecute.length; i++) {
            (bool success, ) = address(this).call(
                abi.encodeWithSelector(functionsToExecute[i], data)
            );
            if (!success)
                revert FunctionFailed(
                    functionsToExecute[i],
                    Action.BeforeInitialize
                );
        }
    }
}
