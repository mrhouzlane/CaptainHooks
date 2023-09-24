import os
from eth_account import Account
from web3 import Web3

def proove2(data, validator_private_key):
    authenticated_date = int(time.time())

    timestamp = Web3.toHex(Web3.toBytes(authenticated_date))
    data_bytes = Web3.toBytes(hexstr=data)
    timestamp_bytes = Web3.toBytes(hexstr=timestamp)
    message = data_bytes + timestamp_bytes
    validator_account = Account.privateKeyToAccount(validator_private_key)
    signature = Web3.toHex(validator_account.signHash(Web3.keccak(message)))
    proof = data + timestamp + signature

    return proof

if __name__ == "__main__":
    # Replace with your actual data and private key
    data = "Swapping_token1_for_token2"
    validator_private_key = os.getenv("VALIDATOR_PRIVATE_KEY")

    generated_proof = proove2(data, validator_private_key)
    if generated_proof:
        print("Prooving:", generated_proof)
    else:
        print("Error.")