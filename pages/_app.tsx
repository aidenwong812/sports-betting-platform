import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/main.scss";
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
      </Layout>
    </ThemeProvider>
  )
}
