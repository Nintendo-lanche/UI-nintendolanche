import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide  bg-gradient-to-b from-slate-500 to-teal-100">
      <Head>
        <title>AVAX GAMECENTER</title>
        <link rel="icon" href="/Avax_logo.png" />
      </Head>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
      </div>
    </div>
  );
}

// overflow-auto scrollbar-hide for head div
