const contracts = {
  44787: [
    {
      name: "arbitrum",
      chainId: "44787",
      contracts: {
        currency0: {
          address: "0x04Afaa7b2bD20173cf8650425c06269a281A274d",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "decimals",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "amountToMint",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "DOMAIN_SEPARATOR",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "forceApprove",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "nonces",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "permit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        currency1: {
          address: "0x0b607213ea379B8aDA34763361B496F90aF4b486",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "decimals",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "amountToMint",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "DOMAIN_SEPARATOR",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "forceApprove",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "nonces",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "permit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        PoolManager: {
          address: "0xD992DBa45C015A9F1600439da8021F1196E33170",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "controllerGasLimit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "CannotUpdateEmptyPosition",
              type: "error",
            },
            {
              inputs: [],
              name: "CurrenciesInitializedOutOfOrder",
              type: "error",
            },
            {
              inputs: [],
              name: "CurrencyNotSettled",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC20TransferFailed",
              type: "error",
            },
            {
              inputs: [],
              name: "FeeTooLarge",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hooks",
                  type: "address",
                },
              ],
              name: "HookAddressNotValid",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidCaller",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidHookResponse",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidSqrtRatio",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidTick",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "locker",
                  type: "address",
                },
              ],
              name: "LockedBy",
              type: "error",
            },
            {
              inputs: [],
              name: "MaxCurrenciesTouched",
              type: "error",
            },
            {
              inputs: [],
              name: "NativeTransferFailed",
              type: "error",
            },
            {
              inputs: [],
              name: "NotPoolManagerToken",
              type: "error",
            },
            {
              inputs: [],
              name: "PoolAlreadyInitialized",
              type: "error",
            },
            {
              inputs: [],
              name: "PoolNotInitialized",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint160",
                  name: "sqrtPriceCurrentX96",
                  type: "uint160",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceLimitX96",
                  type: "uint160",
                },
              ],
              name: "PriceLimitAlreadyExceeded",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint160",
                  name: "sqrtPriceLimitX96",
                  type: "uint160",
                },
              ],
              name: "PriceLimitOutOfBounds",
              type: "error",
            },
            {
              inputs: [],
              name: "ProtocolFeeCannotBeFetched",
              type: "error",
            },
            {
              inputs: [],
              name: "SwapAmountCannotBeZero",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
              ],
              name: "TickLiquidityOverflow",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
              ],
              name: "TickLowerOutOfBounds",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickSpacing",
                  type: "int24",
                },
              ],
              name: "TickMisaligned",
              type: "error",
            },
            {
              inputs: [],
              name: "TickSpacingTooLarge",
              type: "error",
            },
            {
              inputs: [],
              name: "TickSpacingTooSmall",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "TickUpperOutOfBounds",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "TicksMisordered",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "hookFees",
                  type: "uint24",
                },
              ],
              name: "HookFeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "Currency",
                  name: "currency0",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "Currency",
                  name: "currency1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tickSpacing",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "contract IHooks",
                  name: "hooks",
                  type: "address",
                },
              ],
              name: "Initialize",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "int256",
                  name: "liquidityDelta",
                  type: "int256",
                },
              ],
              name: "ModifyPosition",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "oldOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnerChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "protocolFeeController",
                  type: "address",
                },
              ],
              name: "ProtocolFeeControllerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "protocolFees",
                  type: "uint24",
                },
              ],
              name: "ProtocolFeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "int128",
                  name: "amount0",
                  type: "int128",
                },
                {
                  indexed: false,
                  internalType: "int128",
                  name: "amount1",
                  type: "int128",
                },
                {
                  indexed: false,
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  indexed: false,
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                },
              ],
              name: "Swap",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "TransferBatch",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "TransferSingle",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "value",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "URI",
              type: "event",
            },
            {
              inputs: [],
              name: "MAX_TICK_SPACING",
              outputs: [
                {
                  internalType: "int24",
                  name: "",
                  type: "int24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "MIN_PROTOCOL_FEE_DENOMINATOR",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "MIN_TICK_SPACING",
              outputs: [
                {
                  internalType: "int24",
                  name: "",
                  type: "int24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "accounts",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
              ],
              name: "balanceOfBatch",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "collectHookFees",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountCollected",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "collectProtocolFees",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountCollected",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "locker",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "currencyDelta",
              outputs: [
                {
                  internalType: "int256",
                  name: "currencyDelta",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "getLiquidity",
              outputs: [
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getLiquidity",
              outputs: [
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "i",
                  type: "uint256",
                },
              ],
              name: "getLock",
              outputs: [
                {
                  internalType: "address",
                  name: "locker",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "getPosition",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint128",
                      name: "liquidity",
                      type: "uint128",
                    },
                    {
                      internalType: "uint256",
                      name: "feeGrowthInside0LastX128",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "feeGrowthInside1LastX128",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Position.Info",
                  name: "position",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSlot0",
              outputs: [
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  internalType: "uint24",
                  name: "protocolFees",
                  type: "uint24",
                },
                {
                  internalType: "uint24",
                  name: "hookFees",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hookAddress",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "hookFeesAccrued",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "initialize",
              outputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "lock",
              outputs: [
                {
                  internalType: "bytes",
                  name: "result",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "lockData",
              outputs: [
                {
                  internalType: "uint128",
                  name: "length",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "nonzeroDeltaCount",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "modifyPosition",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155BatchReceived",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155Received",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "pools",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint160",
                      name: "sqrtPriceX96",
                      type: "uint160",
                    },
                    {
                      internalType: "int24",
                      name: "tick",
                      type: "int24",
                    },
                    {
                      internalType: "uint24",
                      name: "protocolFees",
                      type: "uint24",
                    },
                    {
                      internalType: "uint24",
                      name: "hookFees",
                      type: "uint24",
                    },
                  ],
                  internalType: "struct Pool.Slot0",
                  name: "slot0",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "feeGrowthGlobal0X128",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "feeGrowthGlobal1X128",
                  type: "uint256",
                },
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "protocolFeeController",
              outputs: [
                {
                  internalType: "contract IProtocolFeeController",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "protocolFeesAccrued",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "reservesOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeBatchTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
              ],
              name: "setHookFees",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "setOwner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract IProtocolFeeController",
                  name: "controller",
                  type: "address",
                },
              ],
              name: "setProtocolFeeController",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
              ],
              name: "setProtocolFees",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "settle",
              outputs: [
                {
                  internalType: "uint256",
                  name: "paid",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "swap",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "take",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "uri",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        UniversalHookFactory: {
          address: "0xf13f7BcbF0E2DC940efC65491Dce8042Db872991",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "_manager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "hookAddr",
                  type: "address",
                },
              ],
              name: "HookCreated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256[]",
                  name: "saltsUints",
                  type: "uint256[]",
                },
              ],
              name: "addSalts",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "availableSalts",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
              ],
              name: "deploy",
              outputs: [
                {
                  internalType: "address",
                  name: "contractDeployed",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getAvailableSalts",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "start",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "end",
                  type: "uint256",
                },
              ],
              name: "getBulkPrecomputeHookAddresses",
              outputs: [
                {
                  internalType: "address[]",
                  name: "addresses",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "salt",
                  type: "bytes32",
                },
              ],
              name: "getPrecomputedHookAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "manager",
              outputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_hashedKey",
                  type: "bytes32",
                },
              ],
              name: "setHashedKey",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Router04: {
          address: "0x5290115b5B3013D2502Ca6163F27019783d465b3",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "_manager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "ERC20TransferFailed",
              type: "error",
            },
            {
              inputs: [],
              name: "LockFailure",
              type: "error",
            },
            {
              inputs: [],
              name: "NativeTransferFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "lockAcquired",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "Currency",
                          name: "currency0",
                          type: "address",
                        },
                        {
                          internalType: "Currency",
                          name: "currency1",
                          type: "address",
                        },
                        {
                          internalType: "uint24",
                          name: "fee",
                          type: "uint24",
                        },
                        {
                          internalType: "int24",
                          name: "tickSpacing",
                          type: "int24",
                        },
                        {
                          internalType: "contract IHooks",
                          name: "hooks",
                          type: "address",
                        },
                      ],
                      internalType: "struct PoolKey",
                      name: "key",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "int24",
                          name: "tickLower",
                          type: "int24",
                        },
                        {
                          internalType: "int24",
                          name: "tickUpper",
                          type: "int24",
                        },
                        {
                          internalType: "int256",
                          name: "liquidityDelta",
                          type: "int256",
                        },
                      ],
                      internalType: "struct IPoolManager.ModifyPositionParams",
                      name: "params",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Router04.CallbackDataModifyPosition",
                  name: "data",
                  type: "tuple",
                },
              ],
              name: "lockAcquiredModifyPosition",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "Currency",
                          name: "currency0",
                          type: "address",
                        },
                        {
                          internalType: "Currency",
                          name: "currency1",
                          type: "address",
                        },
                        {
                          internalType: "uint24",
                          name: "fee",
                          type: "uint24",
                        },
                        {
                          internalType: "int24",
                          name: "tickSpacing",
                          type: "int24",
                        },
                        {
                          internalType: "contract IHooks",
                          name: "hooks",
                          type: "address",
                        },
                      ],
                      internalType: "struct PoolKey",
                      name: "key",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "zeroForOne",
                          type: "bool",
                        },
                        {
                          internalType: "int256",
                          name: "amountSpecified",
                          type: "int256",
                        },
                        {
                          internalType: "uint160",
                          name: "sqrtPriceLimitX96",
                          type: "uint160",
                        },
                      ],
                      internalType: "struct IPoolManager.SwapParams",
                      name: "params",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Router04.CallbackDataSwap",
                  name: "data",
                  type: "tuple",
                },
              ],
              name: "lockAcquiredSwap",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "manager",
              outputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
              ],
              name: "modifyPosition",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
              ],
              name: "swap",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
          ],
        },
        UniversalHook: {
          address: "0x20C519BC962da14622d902DE5f1DABeDD546fd85",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "_manager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "",
                  type: "uint8",
                },
              ],
              name: "FunctionFailed",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "",
                  type: "uint8",
                },
              ],
              name: "BlacklistedForAction",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "amount0",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount1",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterDonate",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterInitialize",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterModifyPosition",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterSwap",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "amount0",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount1",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeDonate",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeInitialize",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeModifyPosition",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeSwap",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "functionsForAction",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "getFee",
              outputs: [
                {
                  internalType: "uint24",
                  name: "",
                  type: "uint24",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
              ],
              name: "getHookFees",
              outputs: [
                {
                  internalType: "uint24",
                  name: "hookFee",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "hookFeeForPool",
              outputs: [
                {
                  internalType: "uint24",
                  name: "",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "manager",
              outputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "not_blacklisted_before_initialize",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "only_owner_before_initialize",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bool",
                  name: "blacklisted",
                  type: "bool",
                },
              ],
              name: "setBlacklistedForAction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bytes4[]",
                  name: "functions",
                  type: "bytes4[]",
                },
              ],
              name: "setFunctionsForAction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint24",
                  name: "hookFee",
                  type: "uint24",
                },
              ],
              name: "setHookFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint24",
                  name: "hookFee",
                  type: "uint24",
                },
              ],
              name: "setHookFeeForPool",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bool",
                  name: "whitelisted",
                  type: "bool",
                },
              ],
              name: "setWhitelistedForAction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "whitelist_before_initialize",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "",
                  type: "uint8",
                },
              ],
              name: "whitelistedForAction",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  534351: [
    {
      name: "arbitrum",
      chainId: "534351",
      contracts: {
        currency1: {
          address: "0xDb788B721E53455DC76F3190751115A5Fa55385d",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "decimals",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "amountToMint",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "DOMAIN_SEPARATOR",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "forceApprove",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "nonces",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "permit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        currency0: {
          address: "0x7C9F25e2CeEB2c33C7ac3D7FBB6Fbef4112967De",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "decimals",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "amountToMint",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "DOMAIN_SEPARATOR",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "forceApprove",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "nonces",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "permit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        PoolManager: {
          address: "0xaa4Bc7298cfE6318566f9EA2c29E4E83Ee205e42",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "controllerGasLimit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "CannotUpdateEmptyPosition",
              type: "error",
            },
            {
              inputs: [],
              name: "CurrenciesInitializedOutOfOrder",
              type: "error",
            },
            {
              inputs: [],
              name: "CurrencyNotSettled",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC20TransferFailed",
              type: "error",
            },
            {
              inputs: [],
              name: "FeeTooLarge",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hooks",
                  type: "address",
                },
              ],
              name: "HookAddressNotValid",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidCaller",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidHookResponse",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidSqrtRatio",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidTick",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "locker",
                  type: "address",
                },
              ],
              name: "LockedBy",
              type: "error",
            },
            {
              inputs: [],
              name: "MaxCurrenciesTouched",
              type: "error",
            },
            {
              inputs: [],
              name: "NativeTransferFailed",
              type: "error",
            },
            {
              inputs: [],
              name: "NotPoolManagerToken",
              type: "error",
            },
            {
              inputs: [],
              name: "PoolAlreadyInitialized",
              type: "error",
            },
            {
              inputs: [],
              name: "PoolNotInitialized",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint160",
                  name: "sqrtPriceCurrentX96",
                  type: "uint160",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceLimitX96",
                  type: "uint160",
                },
              ],
              name: "PriceLimitAlreadyExceeded",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint160",
                  name: "sqrtPriceLimitX96",
                  type: "uint160",
                },
              ],
              name: "PriceLimitOutOfBounds",
              type: "error",
            },
            {
              inputs: [],
              name: "ProtocolFeeCannotBeFetched",
              type: "error",
            },
            {
              inputs: [],
              name: "SwapAmountCannotBeZero",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
              ],
              name: "TickLiquidityOverflow",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
              ],
              name: "TickLowerOutOfBounds",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickSpacing",
                  type: "int24",
                },
              ],
              name: "TickMisaligned",
              type: "error",
            },
            {
              inputs: [],
              name: "TickSpacingTooLarge",
              type: "error",
            },
            {
              inputs: [],
              name: "TickSpacingTooSmall",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "TickUpperOutOfBounds",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "TicksMisordered",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "hookFees",
                  type: "uint24",
                },
              ],
              name: "HookFeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "Currency",
                  name: "currency0",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "Currency",
                  name: "currency1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tickSpacing",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "contract IHooks",
                  name: "hooks",
                  type: "address",
                },
              ],
              name: "Initialize",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "int256",
                  name: "liquidityDelta",
                  type: "int256",
                },
              ],
              name: "ModifyPosition",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "oldOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnerChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "protocolFeeController",
                  type: "address",
                },
              ],
              name: "ProtocolFeeControllerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "protocolFees",
                  type: "uint24",
                },
              ],
              name: "ProtocolFeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "int128",
                  name: "amount0",
                  type: "int128",
                },
                {
                  indexed: false,
                  internalType: "int128",
                  name: "amount1",
                  type: "int128",
                },
                {
                  indexed: false,
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  indexed: false,
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                },
              ],
              name: "Swap",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "TransferBatch",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "TransferSingle",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "value",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "URI",
              type: "event",
            },
            {
              inputs: [],
              name: "MAX_TICK_SPACING",
              outputs: [
                {
                  internalType: "int24",
                  name: "",
                  type: "int24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "MIN_PROTOCOL_FEE_DENOMINATOR",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "MIN_TICK_SPACING",
              outputs: [
                {
                  internalType: "int24",
                  name: "",
                  type: "int24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "accounts",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
              ],
              name: "balanceOfBatch",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "collectHookFees",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountCollected",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "collectProtocolFees",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountCollected",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "locker",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "currencyDelta",
              outputs: [
                {
                  internalType: "int256",
                  name: "currencyDelta",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "getLiquidity",
              outputs: [
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getLiquidity",
              outputs: [
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "i",
                  type: "uint256",
                },
              ],
              name: "getLock",
              outputs: [
                {
                  internalType: "address",
                  name: "locker",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "getPosition",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint128",
                      name: "liquidity",
                      type: "uint128",
                    },
                    {
                      internalType: "uint256",
                      name: "feeGrowthInside0LastX128",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "feeGrowthInside1LastX128",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Position.Info",
                  name: "position",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSlot0",
              outputs: [
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  internalType: "uint24",
                  name: "protocolFees",
                  type: "uint24",
                },
                {
                  internalType: "uint24",
                  name: "hookFees",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hookAddress",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "hookFeesAccrued",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "initialize",
              outputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "lock",
              outputs: [
                {
                  internalType: "bytes",
                  name: "result",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "lockData",
              outputs: [
                {
                  internalType: "uint128",
                  name: "length",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "nonzeroDeltaCount",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "modifyPosition",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155BatchReceived",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155Received",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "pools",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint160",
                      name: "sqrtPriceX96",
                      type: "uint160",
                    },
                    {
                      internalType: "int24",
                      name: "tick",
                      type: "int24",
                    },
                    {
                      internalType: "uint24",
                      name: "protocolFees",
                      type: "uint24",
                    },
                    {
                      internalType: "uint24",
                      name: "hookFees",
                      type: "uint24",
                    },
                  ],
                  internalType: "struct Pool.Slot0",
                  name: "slot0",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "feeGrowthGlobal0X128",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "feeGrowthGlobal1X128",
                  type: "uint256",
                },
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "protocolFeeController",
              outputs: [
                {
                  internalType: "contract IProtocolFeeController",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "protocolFeesAccrued",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "reservesOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeBatchTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
              ],
              name: "setHookFees",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "setOwner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract IProtocolFeeController",
                  name: "controller",
                  type: "address",
                },
              ],
              name: "setProtocolFeeController",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
              ],
              name: "setProtocolFees",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "settle",
              outputs: [
                {
                  internalType: "uint256",
                  name: "paid",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "swap",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "take",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "uri",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        UniversalHookFactory: {
          address: "0xC021cFE4fDe075E8038217B1911CB0D9406B8A29",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "_manager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "hookAddr",
                  type: "address",
                },
              ],
              name: "HookCreated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256[]",
                  name: "saltsUints",
                  type: "uint256[]",
                },
              ],
              name: "addSalts",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "availableSalts",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
              ],
              name: "deploy",
              outputs: [
                {
                  internalType: "address",
                  name: "contractDeployed",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getAvailableSalts",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "start",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "end",
                  type: "uint256",
                },
              ],
              name: "getBulkPrecomputeHookAddresses",
              outputs: [
                {
                  internalType: "address[]",
                  name: "addresses",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "salt",
                  type: "bytes32",
                },
              ],
              name: "getPrecomputedHookAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "manager",
              outputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_hashedKey",
                  type: "bytes32",
                },
              ],
              name: "setHashedKey",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Router04: {
          address: "0x2FB7aB8BcE514B8fE0c3e166A6cF0649823c4BAd",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "_manager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "ERC20TransferFailed",
              type: "error",
            },
            {
              inputs: [],
              name: "LockFailure",
              type: "error",
            },
            {
              inputs: [],
              name: "NativeTransferFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "lockAcquired",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "Currency",
                          name: "currency0",
                          type: "address",
                        },
                        {
                          internalType: "Currency",
                          name: "currency1",
                          type: "address",
                        },
                        {
                          internalType: "uint24",
                          name: "fee",
                          type: "uint24",
                        },
                        {
                          internalType: "int24",
                          name: "tickSpacing",
                          type: "int24",
                        },
                        {
                          internalType: "contract IHooks",
                          name: "hooks",
                          type: "address",
                        },
                      ],
                      internalType: "struct PoolKey",
                      name: "key",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "int24",
                          name: "tickLower",
                          type: "int24",
                        },
                        {
                          internalType: "int24",
                          name: "tickUpper",
                          type: "int24",
                        },
                        {
                          internalType: "int256",
                          name: "liquidityDelta",
                          type: "int256",
                        },
                      ],
                      internalType: "struct IPoolManager.ModifyPositionParams",
                      name: "params",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Router04.CallbackDataModifyPosition",
                  name: "data",
                  type: "tuple",
                },
              ],
              name: "lockAcquiredModifyPosition",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "Currency",
                          name: "currency0",
                          type: "address",
                        },
                        {
                          internalType: "Currency",
                          name: "currency1",
                          type: "address",
                        },
                        {
                          internalType: "uint24",
                          name: "fee",
                          type: "uint24",
                        },
                        {
                          internalType: "int24",
                          name: "tickSpacing",
                          type: "int24",
                        },
                        {
                          internalType: "contract IHooks",
                          name: "hooks",
                          type: "address",
                        },
                      ],
                      internalType: "struct PoolKey",
                      name: "key",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "zeroForOne",
                          type: "bool",
                        },
                        {
                          internalType: "int256",
                          name: "amountSpecified",
                          type: "int256",
                        },
                        {
                          internalType: "uint160",
                          name: "sqrtPriceLimitX96",
                          type: "uint160",
                        },
                      ],
                      internalType: "struct IPoolManager.SwapParams",
                      name: "params",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Router04.CallbackDataSwap",
                  name: "data",
                  type: "tuple",
                },
              ],
              name: "lockAcquiredSwap",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "manager",
              outputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
              ],
              name: "modifyPosition",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
              ],
              name: "swap",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
          ],
        },
        UniversalHook: {
          address: "0x3a2cc67a910F543E98Bed7F96e4CAC62651416C7",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "_manager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "",
                  type: "uint8",
                },
              ],
              name: "FunctionFailed",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "",
                  type: "uint8",
                },
              ],
              name: "BlacklistedForAction",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "amount0",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount1",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterDonate",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterInitialize",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterModifyPosition",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterSwap",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "amount0",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount1",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeDonate",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeInitialize",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeModifyPosition",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeSwap",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "functionsForAction",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "getFee",
              outputs: [
                {
                  internalType: "uint24",
                  name: "",
                  type: "uint24",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
              ],
              name: "getHookFees",
              outputs: [
                {
                  internalType: "uint24",
                  name: "hookFee",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "hookFeeForPool",
              outputs: [
                {
                  internalType: "uint24",
                  name: "",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "manager",
              outputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "not_blacklisted_before_initialize",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "only_owner_before_initialize",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bool",
                  name: "blacklisted",
                  type: "bool",
                },
              ],
              name: "setBlacklistedForAction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bytes4[]",
                  name: "functions",
                  type: "bytes4[]",
                },
              ],
              name: "setFunctionsForAction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint24",
                  name: "hookFee",
                  type: "uint24",
                },
              ],
              name: "setHookFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint24",
                  name: "hookFee",
                  type: "uint24",
                },
              ],
              name: "setHookFeeForPool",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bool",
                  name: "whitelisted",
                  type: "bool",
                },
              ],
              name: "setWhitelistedForAction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "whitelist_before_initialize",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "",
                  type: "uint8",
                },
              ],
              name: "whitelistedForAction",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
