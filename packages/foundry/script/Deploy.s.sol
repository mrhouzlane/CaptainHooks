// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

// WORKING CODE

import "../contracts/YourContract.sol";
import "./DeployHelpers.s.sol";
import {PoolManager, IPoolManager} from "../contracts/v4-core/PoolManager.sol";
import {TokenFixture} from "../test/utils/TokenFixture.sol";
import {TestERC20} from "../contracts/v4-core/test/TestERC20.sol";
import {CurrencyLibrary, Currency} from "../contracts/v4-core/types/Currency.sol";
import {UniversalHookFactory} from "../contracts/UniversalHookFactory.sol";
import {Router04} from "../contracts/Router04.sol";
import {UniversalHook} from "../contracts/UniversalHook.sol";

contract DeployScript is ScaffoldETHDeploy, TokenFixture {
    error InvalidPrivateKey(string);
    TestERC20 token0;
    TestERC20 token1;
    PoolManager manager;
    Router04 router;
    UniversalHookFactory hookFactory;
    UniversalHook sampleHook;

    address secondTestWallet =
        address(0x51f9B9fcBDCb13029779bcaA3fbb34adCcf04BCC);

    function run() external {
        uint256 deployerPrivateKey = setupLocalhostEnv();
        if (deployerPrivateKey == 0) {
            revert InvalidPrivateKey(
                "You don't have a deployer account. Make sure you have set DEPLOYER_PRIVATE_KEY in .env or use `yarn generate` to generate a new random account"
            );
        }

        vm.startBroadcast(deployerPrivateKey);

        initializeTokens();

        token0 = TestERC20(Currency.unwrap(currency0));
        token1 = TestERC20(Currency.unwrap(currency1));

        deployments.push(Deployment("currency0", address(token0)));
        deployments.push(Deployment("currency1", address(token1)));

        // deploy manager
        manager = new PoolManager(500000);

        // deploy hook factory
        UniversalHookFactory hookFactory = new UniversalHookFactory(
            PoolManager(manager)
        );
        hookFactory.setHashedKey(keccak256(bytes("ETH-NYC")));

        // deploy router
        router = new Router04(manager);

        // deploy sample hook
        sampleHook = new UniversalHook(PoolManager(payable(address(0))));

        // mint tokens
        token0.mint(vm.addr(deployerPrivateKey), 100000 ether);
        token0.mint(secondTestWallet, 100000 ether);
        token1.mint(vm.addr(deployerPrivateKey), 100000 ether);
        token1.mint(secondTestWallet, 100000 ether);

        vm.stopBroadcast();
        exportDeployments();
    }

    function test() public {}
}

// COMMENT OUT BELOW CODE

// import "../contracts/YourContract.sol";
// import "./DeployHelpers.s.sol";
// import {PoolManager, IPoolManager} from "v4-core/PoolManager.sol";

// contract DeployScript is ScaffoldETHDeploy {
//     error InvalidPrivateKey(string);
//     PoolManager manager;

//     function run() external {
//         uint256 deployerPrivateKey = setupLocalhostEnv();
//         if (deployerPrivateKey == 0) {
//             revert InvalidPrivateKey(
//                 "You don't have a deployer account. Make sure you have set DEPLOYER_PRIVATE_KEY in .env or use `yarn generate` to generate a new random account"
//             );
//         }

//         vm.startBroadcast(deployerPrivateKey);

//         manager = new PoolManager(500000);
//         vm.stopBroadcast();
//         exportDeployments();
//     }

//     function test() public {}
// }
