import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId="Uu9IXed3lPs1EGBYWkSz8oHPPjU8wXK5chkuo0xw"
      serverUrl="https://amngjv3pvd3a.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
