// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;
import {PoolKey} from "../v4-core/types/PoolKey.sol";
import {IPoolManager} from "../v4-core/interfaces/IPoolManager.sol";

interface IUniversalHook {
    enum Action {
        BeforeInitialize,
        AfterInitialize,
        BeforeSwap,
        AfterSwap,
        BeforeDonate,
        AfterDonate,
        DynamicFee
    }
    enum Plugin {
        WHITELIST,
        BLACKLIST,
        SWAP_VOLUME_FEE
    }

    struct BeforeInitializeParams {
        address sender;
        PoolKey key;
        uint160 sqrtPriceX96;
        bytes hookData;
    }

    struct BeforeSwapParams {
        address sender;
        PoolKey key;
        IPoolManager.SwapParams params;
        bytes hookData;
    }

    struct TradingVolumeDiscountThreshold {
        uint256 volume;
        uint8 discountPts;
    }

    struct UniversalHookParams {
        address sender; // we only pass the sender for now
    }
    error FunctionFailed(bytes4, Action);
    error InvalidFee(uint24);
}
