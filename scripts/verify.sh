#!/bin/bash
contractAddres="$1"
network="$2"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

npx hardhat verify --network ${network} ${contractAddres}

if [[ $? -ne 0 ]]; then
  echo "${RED}Verification failed. Error occurred while verifying the contract.${NC}"
  exit 1
else
  echo "${GREEN}Contract verification successful!${NC}"
fi



