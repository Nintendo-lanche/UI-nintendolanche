import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import Image from "next/image";

function Header() {
  const { user, logoutOnPress } = useMoralis();
  const walletAddress = user.get("ethAddress");

  function copyClipboardAddress() {
    navigator.clipboard.writeText(walletAddress);
  }

  return (
    <div>
      <div className="sticky top-0 p-3 z-50 bg-gradient-to-b from-slate-700/[.6] to-red-800/[.05] shadow-lg text-red-800 rounded-3xl border-b-2 border-red-800">
        <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
          <div className="relative h-12 w-12 mx-auto hidden lg:inline-grid">
            <Image
              height={50}
              width={50}
              className="rounded-full"
              src="/avax1.png"
            />
            {/* ADD GAME IMAGE ABOVE */}
          </div>
          <div className="col-span-4 text-left lg:text-center">
            <div className="relative h-16 w-16 lg:mx-auto border-red-500 rounded-full border-2 bg-red-100">
              <Avatar logoutOnPress />
            </div>
            <h2 className="flex flex-col text-l text-black font-bold truncate p-1 ">
              {user.getUsername()}
            </h2>
            <p
              onClick={copyClipboardAddress}
              className="flex flex-col text-xs text-black font-light truncate pb-2 hover:cursor-pointer active:text-red-100"
            >
              {walletAddress}
            </p>
            <ChangeUsername />
          </div>
        </div>
      </div>
      {/* <Navbar /> */}
    </div>
  );
}

export default Header;
