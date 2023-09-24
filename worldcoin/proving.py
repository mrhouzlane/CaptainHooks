import os
import json
import requests
from proove2 import proove2

def proving_humanity(data, worldcoin_proof):
    human_has_been_verified = False

    req_body = {
        "merkle_root": worldcoin_proof["merkle_root"],
        "nullifier_hash": worldcoin_proof["nullifier_hash"],
        "proof": worldcoin_proof["proof"],
        "credential_type": worldcoin_proof["credential_type"],
        "action": os.getenv("WORLDCOIN_ACTION_NAME"),
        "signal": worldcoin_proof.get("signal", ""), 
    }

    print("req_body -", json.dumps(req_body))
    worldcoin_app_id = os.getenv("WORLDCOIN_APP_ID")
    verify_url = f"https://developer.worldcoin.org/api/v1/verify/{worldcoin_app_id}"

    headers = {"Content-Type": "application/json"}

    verify_res = requests.post(verify_url, json=req_body, headers=headers)

    print(verify_res)

    if verify_res.status_code == 200:
        print(verify_res.status_code)
        human_has_been_verified = True

    if not human_has_been_verified:
        return None

    proof = proove2(data)

    return proof

if __name__ == "__main__":
    proof_data = {}  
    worldcoin_proof_data = {} 
    generated_proof = proving_humanity(proof_data, worldcoin_proof_data)
    if generated_proof:
        print("Generated Proof:", generated_proof)
    else:
        print("Human verification failed.")
