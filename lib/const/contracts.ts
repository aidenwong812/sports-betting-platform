import { erc20Abi, getAddress } from "viem";

export const bettingContract = {
  address: getAddress("0x45986706d9F3d1d8DfBbAf44f3ABcc7724FA3D43"),
  abi: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_paymentToken",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paymentToken",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_figureId",
          "type": "uint256"
        },
        {
          "internalType": "enum Betting.BetOption",
          "name": "_option",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "_odd",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "_betAmount",
          "type": "uint256"
        }
      ],
      "name": "placeBet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_figureId",
          "type": "uint256"
        },
        {
          "internalType": "enum Betting.BetOption",
          "name": "_result",
          "type": "uint8"
        }
      ],
      "name": "processGame",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "updateOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newPaymentToken",
          "type": "address"
        }
      ],
      "name": "updatePaymentToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
} as const

export const erc20Contract = {
  address: getAddress(process.env.NEXT_PUBLIC_PAYMENT_TOKEN!),
  abi: erc20Abi,
} as const