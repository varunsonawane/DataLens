import asyncio
import os
import sys
from dotenv import load_dotenv

load_dotenv()
sys.path.append('d:\\Hackathon\\DataLens\\datalens\\backend')

from dependencies.auth import get_owner_id

async def main():
    token = "7567603a-468c-4822-8e52-10ba13490e6f"
    auth_header = f"Bearer {token}"
    
    print(f"Testing get_owner_id with {auth_header}")
    try:
        owner_id = await get_owner_id(authorization=auth_header)
        print(f"Resulting owner_id: {owner_id}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    asyncio.run(main())
