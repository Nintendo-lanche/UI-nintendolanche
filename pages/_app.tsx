import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {

  
  return (
    <MoralisProvider 
          appId="5mgHy2kpLFIjmySx7yAAJMugLG4wVn1SsnOKZZhn" 
          serverUrl="https://jjk1k8ehc6ws.usemoralis.com:2053/server" >

      <Component {...pageProps} />
    </MoralisProvider>
  )
  
}

export default MyApp
