import Image from "next/image";
// import BG from '../public/bg.jpeg';
// import Frontpic from "../public/fp.png";
import { useMoralis, ByMoralis } from "react-moralis";

function Login() {

    const { authenticate, isInitializing } = useMoralis();
    return (
        <div className="bg-gradient-to-b from-slate-500 to-black relative text-black h-screen">
            
            <div className="flex flex-col relative z50 p-10 h-4/6 w-full items-center justify-center space-y-8">
                <Image className="rotate-180 rounded-full" src="/Avatar.png" height={200} width={200} />

                <button 
                    className="bg-teal-400 rounded-full p-3 font-bold animate-pulse"
                    onClick={authenticate}
                    >Metamask Login</button>
            </div>
            <div className="bg-gradient-to-t border-teal-800 border-4 from-slate-500/[.6] to-teal-100/[.6] p-5 flex flex-col absolute z50 w-full radius items-center justify-center shadow-lg">
                <h1 className="font-bold p-8 text-teal-400 text-3xl">Classic Gamecenter</h1>
                <p>by Harsh, Dominic & Felix</p>
            <div 
                className="my-2 py-10">
                    <ByMoralis variant="dark" style={{marginLeft:"auto", marginRight:"auto"}}/>
                </div>
            </div>
            
        </div>
    )
}

export default Login;
