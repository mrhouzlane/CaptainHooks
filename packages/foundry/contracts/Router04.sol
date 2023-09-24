// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {CurrencyLibrary, Currency} from "./v4-core/types/Currency.sol";
import {IERC20Minimal} from "./v4-core/interfaces/external/IERC20Minimal.sol";

import {ILockCallback} from "./v4-core/interfaces/callback/ILockCallback.sol";
import {IPoolManager} from "./v4-core/interfaces/IPoolManager.sol";
import {BalanceDelta} from "./v4-core/types/BalanceDelta.sol";
import {PoolKey} from "./v4-core/types/PoolKey.sol";
import {console} from "forge-std/console.sol";

contract Router04 is ILockCallback {
    using CurrencyLibrary for Currency;

    error LockFailure();

    IPoolManager public immutable manager;

    constructor(IPoolManager _manager) {
        manager = _manager;
    }

    struct CallbackDataSwap {
        address sender;
        PoolKey key;
        IPoolManager.SwapParams params;
    }

    struct CallbackDataModifyPosition {
        address sender;
        PoolKey key;
        IPoolManager.ModifyPositionParams params;
    }

    modifier onlyManager() {
        require(msg.sender == address(manager));
        _;
    }

    modifier onlySelf() {
        require(msg.sender == address(this));
        _;
    }

    function swap(
        PoolKey memory key,
        IPoolManager.SwapParams memory params
    ) external payable returns (BalanceDelta delta) {
        bytes memory returnData = manager.lock(
            abi.encodeWithSelector(
                this.lockAcquiredSwap.selector,
                (CallbackDataSwap(msg.sender, key, params))
            )
        );

        delta = abi.decode(returnData, (BalanceDelta));

        uint256 ethBalance = address(this).balance;
        if (ethBalance > 0) {
            CurrencyLibrary.NATIVE.transfer(msg.sender, ethBalance);
        }
    }

    function lockAcquired(
        bytes calldata data
    ) external onlyManager returns (bytes memory) {
        (bool success, bytes memory returnData) = address(this).call(data);
        if (success) return returnData;
        if (returnData.length == 0) revert LockFailure();
        assembly {
            revert(add(returnData, 32), mload(returnData))
        }
    }

    function lockAcquiredSwap(
        CallbackDataSwap memory data
    ) external onlySelf returns (BalanceDelta delta) {
        delta = manager.swap(data.key, data.params, new bytes(0));

        if (data.params.zeroForOne) {
            if (delta.amount0() > 0) {
                if (data.key.currency0.isNative()) {
                    manager.settle{value: uint128(delta.amount0())}(
                        data.key.currency0
                    );
                } else {
                    IERC20Minimal(Currency.unwrap(data.key.currency0))
                        .transferFrom(
                            data.sender,
                            address(manager),
                            uint128(delta.amount0())
                        );
                    manager.settle(data.key.currency0);
                }
            }
            if (delta.amount1() < 0) {
                manager.take(
                    data.key.currency1,
                    data.sender,
                    uint128(-delta.amount1())
                );
            }
        } else {
            if (delta.amount1() > 0) {
                if (data.key.currency1.isNative()) {} else {
                    IERC20Minimal(Currency.unwrap(data.key.currency1))
                        .transferFrom(
                            data.sender,
                            address(manager),
                            uint128(delta.amount1())
                        );
                    manager.settle(data.key.currency1);
                }
            }
            if (delta.amount0() < 0) {
                manager.take(
                    data.key.currency0,
                    data.sender,
                    uint128(-delta.amount0())
                );
            }
        }
    }

    function modifyPosition(
        PoolKey memory key,
        IPoolManager.ModifyPositionParams memory params
    ) external payable returns (BalanceDelta delta) {
        delta = abi.decode(
            manager.lock(
                abi.encodeWithSelector(
                    this.lockAcquiredModifyPosition.selector,
                    CallbackDataModifyPosition(msg.sender, key, params)
                )
            ),
            (BalanceDelta)
        );

        uint256 ethBalance = address(this).balance;
        if (ethBalance > 0) {
            CurrencyLibrary.NATIVE.transfer(msg.sender, ethBalance);
        }
    }

    function lockAcquiredModifyPosition(
        CallbackDataModifyPosition memory data
    ) external onlySelf returns (BalanceDelta delta) {
        delta = manager.modifyPosition(data.key, data.params, new bytes(0));

        if (delta.amount0() > 0) {
            if (data.key.currency0.isNative()) {
                manager.settle{value: uint128(delta.amount0())}(
                    data.key.currency0
                );
            } else {
                IERC20Minimal(Currency.unwrap(data.key.currency0)).transferFrom(
                        data.sender,
                        address(manager),
                        uint128(delta.amount0())
                    );
                manager.settle(data.key.currency0);
            }
        }
        if (delta.amount1() > 0) {
            if (data.key.currency1.isNative()) {
                manager.settle{value: uint128(delta.amount1())}(
                    data.key.currency1
                );
            } else {
                IERC20Minimal(Currency.unwrap(data.key.currency1)).transferFrom(
                        data.sender,
                        address(manager),
                        uint128(delta.amount1())
                    );
                manager.settle(data.key.currency1);
            }
        }

        if (delta.amount0() < 0) {
            manager.take(
                data.key.currency0,
                data.sender,
                uint128(-delta.amount0())
            );
        }
        if (delta.amount1() < 0) {
            manager.take(
                data.key.currency1,
                data.sender,
                uint128(-delta.amount1())
            );
        }
    }
}
