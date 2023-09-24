// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;
import {PoolKey} from "../v4-core/types/PoolKey.sol";

interface IUniversalHook {
    enum Action {
        BeforeInitialize,
        AfterInitialize,
        BeforeSwap,
        AfterSwap,
        BeforeDonate,
        AfterDonate
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
    error FunctionFailed(bytes4, Action);
}
