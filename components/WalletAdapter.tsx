import { ReactNode, useMemo } from 'react';


import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { LedgerWalletAdapter, PhantomWalletAdapter, TrustWalletAdapter, UnsafeBurnerWalletAdapter} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from "@solana/web3.js";


require("@solana/wallet-adapter-react-ui/styles.css");

export default function WalletAdapter({ children }: { children: ReactNode }) {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new LedgerWalletAdapter(),
      new TrustWalletAdapter(),
    ], 
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
