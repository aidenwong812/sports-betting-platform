import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/main.scss";
import "react-toastify/dist/ReactToastify.css"
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    setIsLoading(false);
  }, []);
  return (
    <ThemeProvider enableSystem={false}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </ThemeProvider>
  )
}
