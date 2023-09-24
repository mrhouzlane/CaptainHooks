# Captain Hooks  :  Enabling better TradFi Adoption 

<img src="./docs/Logo.png" alt="Image Description" width="200" />

## TL;DR: 

Captain Hooks is a Uniswapv4 tool targeting traditional fiannce entities, offering custom pools with dynamic fee options and other functionnalities. It promotes traditional finance inclusion, facilitating various use cases already implemented like stock trading (NY Trading Hours)  and asset tokenization with simplified asset management (futur plan). 

## How's made

Composed of 4 core smart contracts : 

1. **Router04** : 

- Interacts with the PoolManager. 
- Allows executions of operations such as AddLiquidity, RemoveLiquidity and Swap. 

2. **Pool Manager** : (specific to uniswap v4-core)

- Allows to create Pools (storage variables) 
- When you create these pools you pass the hooks address. 

3. **Universal Hook Factory** : 

- Allows deploying instances of Universal Hook. 
- Creation of unique Universal Hook with specific salts. 

4. **Universal Hook** : 

- Managing hooks and fees 
- Each Universal Hook is associated with a distinct salt


IMPORTANT : Contracts deployed on side chains will have similar ABIs for seemless integration in the FE.

![Solution](./docs/solution.png)


## Technologies Used

### Scaffold ETH : 

Multichain version of scaffold eth so letting users to try in different networks, (add liquidity, remove liquidity, swap in example ui, how much token in each pool)

### Uniswap 

Uniswap offers seamless integrations for hooks in UniswapV4. This enables us to create custom pools. We have used it [here](). 

### Polygon Mumbai 

### Coinbase 

### Arbitrum 

### Scroll 

- Custom verification of smart contracts using Foundry : after deploying contracts, verification process is as follow :
```
forge verify-contract \
    --num-of-optimizations 10 \
    --watch \
    --constructor-args  $(cast abi-encode "constructor(uint256)" 500000) \
    --verifier etherscan \
    --verifier-url https://api-sepolia.scrollscan.dev/api \
    --etherscan-api-key D62920783A4311EE9D6600155D570C742E \
    --compiler-version v0.8.20+commit.a1b79de6 \
    0xaa4Bc7298cfE6318566f9EA2c29E4E83Ee205e42 \
    PoolManager
``` 
#### Debuging : **IMPORTANT** : Compiler version should be the same as the deploy script in Foundry. 

### Celo 

- Custom verification of smart contracts using Foundry : after deploying contracts, verification process is as follow :
```
  forge verify-contract \
    --num-of-optimizations 10 \
    --watch \
    --constructor-args  $(cast abi-encode "constructor(uint256)" 500000) \
    --verifier etherscan \
    --verifier-url https://api-alfajores.celoscan.io/api \
    --etherscan-api-key V4P48P91YBYEK963CWQKM9G3YTTJRKJA8Y \
    --compiler-version v0.8.20+commit.a1b79de6 \
    0xD992DBa45C015A9F1600439da8021F1196E33170\
    PoolManager
```

#### Debuging : **IMPORTANT** : Compiler version should be the same as the deploy script in Foundry. 


### Mantle 

### Linea 

### Gnosis 


## Deployed Contracts

### Goerli : 

- [PoolManager]()
- [UniversalHookFactory]()
- [UniversalHook]()

### Base Goerli :

- [PoolManager]()
- [UniversalHookFactory]()
- [UniversalHook]()

### Mumbai :
  
- [PoolManager]()
- [UniversalHookFactory]()
- [UniversalHook]()

### Arbitrum Goerli :

- [PoolManager]()
- [UniversalHookFactory]()
- [UniversalHook]()

### Celo Alfajores Testnet : 

- [PoolManager]()
- [UniversalHookFactory]()
- [UniversalHook]()

### Gnosis Chiado : 

- [PoolManager]()
- [UniversalHookFactory]()
- [UniversalHook]()

### Scroll Sepolia : 

- [PoolManager]()
- [UniversalHookFactory]()
- [UniversalHook]()

### Mantle Testnet : 

- [PoolManager]()
- [UniversalHookFactory]()
- [UniversalHook]()

### Linea Goerli : 

- [PoolManager]()
- [UniversalHookFactory]()
- [UniversalHook]()

## DEMO 

## PoC Live 

## DeployScripts 





