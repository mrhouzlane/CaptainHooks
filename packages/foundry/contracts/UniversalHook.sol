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
import {BokkyPooBahsDateTimeLibrary} from "lib/BokkyPooBahsDateTimeLibrary/contracts/BokkyPooBahsDateTimeLibrary.sol";

import {SafeCast} from "openzeppelin-contracts/utils/math/SafeCast.sol";

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
    using SafeCast for *;
    using PoolIdLibrary for PoolKey;
    using BokkyPooBahsDateTimeLibrary for uint256;

    IPoolManager public immutable manager;

    //////////////////////////////////////////////////
    /////////////// CONFIG VARIABLES /////////////////
    //////////////////////////////////////////////////

    uint24 constant UNISWAP_MAX_FEE_BIPS = 1e6;

    mapping(address => mapping(Action => bool)) private whitelistedForAction;
    mapping(address => mapping(Action => bool)) private BlacklistedForAction;
    mapping(PoolId => uint24) private hookFeeForPool;
    mapping(Action => bytes4[]) private functionsForAction;
    mapping(address => uint256) private userGeneralTradingVolume;
    mapping(address => mapping(PoolId => uint256))
        private userTradingVolumeByPool;
    mapping(address => PoolId[]) private userCreatedPools;
    mapping(address => PoolId) private userLastSwapPool;
    bool[8] private allowedDaysOfTheWeek; // dont use 0, use 1-7
    uint24 generalHookFee;
    uint8 private tradingHoursStart;
    uint8 private tradingHoursEnd;
    uint256 private generalTradingVolume;
    mapping(PoolId => PoolId) private generalTradingVolumeByPool;
    TradingVolumeDiscountThreshold[] private tradingVolumeDiscountThresholds;

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

    //////////////////////////////////////////////////
    /////////////// SETTER FUNCTIONS /////////////////
    //////////////////////////////////////////////////

    function setWhitelistedForAction(
        address user,
        Action action,
        bool whitelisted
    ) external onlyOwner {
        whitelistedForAction[user][action] = whitelisted;
    }

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

    function setAllowedDaysOfTheWeek(
        bool[8] memory allowedDaysOfTheWeek
    ) external onlyOwner {
        allowedDaysOfTheWeek = allowedDaysOfTheWeek;
    }

    function setTradingHours(
        uint8 _tradingHoursStart,
        uint8 _tradingHoursEnd
    ) external onlyOwner {
        require(_tradingHoursStart < _tradingHoursEnd);
        require(_tradingHoursStart >= 0 && _tradingHoursStart <= 23);
        require(_tradingHoursEnd >= 0 && _tradingHoursEnd <= 23);
        // same hour for all days
        tradingHoursStart = _tradingHoursStart;
        tradingHoursEnd = _tradingHoursEnd;
    }

    // TODO : naive way due to solidity error
    // Unimplemented feature (/solidity/libsolidity/codegen/ArrayUtils.cpp:228):Copying of type struct IUniversalHook.TradingVolumeDiscountThreshold memory[] memory to storage not yet supported.
    function addTradingVolumeDiscountThresholds(
        TradingVolumeDiscountThreshold memory _tradingVolumeDiscountThreshold
    ) external onlyOwner {
        tradingVolumeDiscountThresholds.push(_tradingVolumeDiscountThreshold);
    }

    function clearTradingVolumeDiscountThresholds() external onlyOwner {
        delete tradingVolumeDiscountThresholds;
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
        _executeFunctionsForAction(
            Action.BeforeSwap,
            abi.encode(BeforeSwapParams(sender, key, params, hookData))
        );
        return this.beforeSwap.selector;
    }

    function afterSwap(
        address sender, // routers
        PoolKey calldata key,
        IPoolManager.SwapParams calldata params,
        BalanceDelta delta,
        bytes calldata hookData
    ) external override onlyManager returns (bytes4) {
        // update the user trading volume
        // TODO : use a median of both deltas
        UniversalHookParams memory universalHookParams = abi.decode(
            hookData,
            (UniversalHookParams)
        );
        uint256 median;
        if (delta.amount0() >= 0) {
            median = int256(delta.amount0()).toUint256();
            median = median + int256(-delta.amount1()).toUint256();
            userTradingVolumeByPool[universalHookParams.sender][
                key.toId()
            ] += median;
        } else {
            median = int256(delta.amount1()).toUint256();
            median = median + int256(-delta.amount0()).toUint256();
            userTradingVolumeByPool[universalHookParams.sender][
                key.toId()
            ] += median;
        }
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
    ) public override returns (uint24 fee) {
        bytes4[] memory functionsToExecute = functionsForAction[
            Action.DynamicFee
        ];
        bytes memory _data = abi.encode(
            BeforeSwapParams(sender, key, params, data)
        );
        uint8 discount = 1;
        for (uint256 i = 0; i < functionsToExecute.length; i++) {
            (bool success, bytes memory returnData) = address(this).call(
                abi.encodeWithSelector(functionsToExecute[i], _data)
            );
            if (!success)
                revert FunctionFailed(
                    functionsToExecute[i],
                    Action.BeforeInitialize
                );
            discount += abi.decode(returnData, (uint8));
        }
        return (UNISWAP_MAX_FEE_BIPS - 1) / discount;
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

    function day_of_the_week_before_swap(
        bytes memory data
    ) external view onlySelf {
        BeforeSwapParams memory params = abi.decode(data, (BeforeSwapParams));
        require(
            allowedDaysOfTheWeek[
                BokkyPooBahsDateTimeLibrary.getDayOfWeek(block.timestamp)
            ]
        );
    }

    function trading_hours_before_Swap(
        bytes memory data
    ) external view onlySelf {
        BeforeSwapParams memory params = abi.decode(data, (BeforeSwapParams));
        require(
            BokkyPooBahsDateTimeLibrary.getHour(block.timestamp) >=
                tradingHoursStart &&
                BokkyPooBahsDateTimeLibrary.getHour(block.timestamp) <=
                tradingHoursEnd
        );
    }

    function user_trading_volume_dynamic_fee(
        bytes memory data
    ) external view onlySelf returns (uint8) {
        BeforeSwapParams memory params = abi.decode(data, (BeforeSwapParams));
        UniversalHookParams memory hookData = abi.decode(
            params.hookData,
            (UniversalHookParams)
        );
        // get the user trading
        uint256 userTradingVolume = userTradingVolumeByPool[hookData.sender][
            params.key.toId()
        ];
        // find where in the threshold array is located
        uint256 index = 0;
        bool found = false;
        for (uint256 i = 0; i < tradingVolumeDiscountThresholds.length; i++) {
            if (
                userTradingVolume >= tradingVolumeDiscountThresholds[i].volume
            ) {
                index = i;
                found = true;
            }
        }
        if (found) {
            return tradingVolumeDiscountThresholds[index].discountPts;
        } else {
            return 0;
        }
    }

    function whitelist_swap(bytes memory data) external view onlySelf {
        BeforeSwapParams memory params = abi.decode(data, (BeforeSwapParams));
        require(whitelistedForAction[params.sender][Action.BeforeSwap]);
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

    //////////////////////////////////////////////////
    //////////// SOME GETTERS FUNCTION ///////////////
    //////////////////////////////////////////////////

    function getUserTradingVolumeByPool(
        address user,
        PoolId poolId
    ) external view returns (uint256) {
        return userTradingVolumeByPool[user][poolId];
    }
}
