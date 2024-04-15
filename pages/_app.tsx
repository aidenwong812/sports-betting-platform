import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/main.scss";
import "react-toastify/dist/ReactToastify.css"
import Layout from '@/components/Layout';

import { WagmiProvider } from 'wagmi';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { config } from '@/components/WalletConfig';

const queryClient = new QueryClient();


export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    setIsLoading(false);
    
  }, []);
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize='compact' theme={darkTheme()}>
          <ThemeProvider enableSystem={false}>
            <Layout>
              <Component {...pageProps} />
              <ToastContainer />
            </Layout>
          </ThemeProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
