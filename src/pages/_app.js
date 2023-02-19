import '@/styles/globals.css'

import Header from '@/components/header'

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (<><Header/><div className = {inter.className}><div className = 'h-[36px]'></div><Component {...pageProps} /></div></>);
}
