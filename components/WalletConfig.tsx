import { http } from 'wagmi';
import { base, baseSepolia } from 'wagmi/chains';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { metaMaskWallet, coinbaseWallet } from '@rainbow-me/rainbowkit/wallets';
import { createConfig} from 'wagmi';

require("dotenv").config();

import '@rainbow-me/rainbowkit/styles.css';

// Define the connectors for MetaMask and Coinbase Wallet
const connectors = connectorsForWallets([
  {
    groupName: 'Connect Wallet',
    wallets: [metaMaskWallet, coinbaseWallet],
  },
], {
  appName: 'My RainbowKit App',
  projectId: process.env.RAINBOWKIT_API_KEY!,
});

// Create the configuration object
const config = createConfig({
    connectors,
    chains: [base, baseSepolia],
    transports: {
        [base.id]: http(),
        [baseSepolia.id]: http()
    },
});

export { config };