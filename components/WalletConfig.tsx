import { base, sepolia } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';
import { http } from 'viem';

require("dotenv").config();

import '@rainbow-me/rainbowkit/styles.css';

// Define the connectors for MetaMask and Coinbase Wallet

const RAINBOWKIT_API_KEY = process.env.NEXT_PUBLIC_RAINBOWKIT_API_KEY!;

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: RAINBOWKIT_API_KEY,
  wallets: [
    {
      groupName: 'Connect Wallet',
      wallets: [metaMaskWallet],
    },
  ],
  chains: [
    base,
    sepolia,
  ],
  transports: {
    [base.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: true,
});

export { config };