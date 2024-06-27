'use client';
import type { AppProps } from 'next/app';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
//import { wrapper } from '@/lib/RTK/store';
//import '@/styles/globals.css'; 
//import Layout from '@/components/layouts/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrimeReactProvider>
        <Component {...pageProps} />
    </PrimeReactProvider>
  );
}

export default MyApp;
