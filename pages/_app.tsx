'use client';
import type { AppProps } from 'next/app';
import { PrimeReactProvider } from 'primereact/api';
import { Header } from '../components/organisms/Header';
import { Footer } from '../components/organisms/Footer';
import '../styles/main.scss'
import "primereact/resources/themes/lara-light-cyan/theme.css";
//import { wrapper } from '@/lib/RTK/store';
//import Layout from '@/components/layouts/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrimeReactProvider>
      <div className='container'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>        
    </PrimeReactProvider>
  );
}

export default MyApp;
