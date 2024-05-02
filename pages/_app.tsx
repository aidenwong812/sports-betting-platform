import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/main.scss";
import "react-toastify/dist/ReactToastify.css"
import Layout from '@/components/Layout';
import { config } from '@/components/WalletConfig';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import AuthProvider from '@/provider/AuthProvider';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <AuthProvider>
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
    </AuthProvider>
  )
}
