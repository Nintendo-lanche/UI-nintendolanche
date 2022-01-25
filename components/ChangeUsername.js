import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const setUsername = () => {
    const username = prompt(`Edit Username (current: ${user.getUsername()})`);

    if (!username) return;

    setUserData({
      username,
    });
  };

  const { setUserData, isUserUpdating, useError, user } = useMoralis();
  return (
    <div className="flex flex-col text-xs relative  w-24 lg:mx-auto">
      <button
        className="p-1 rounded-2xl text-white shadow-lg bg-red-700/[.9] hover:bg-red-500/[.7] hover:cursor-pointer hover:text-black active:bg-red-100 active:border-t-2 active:border-red-500"
        disabled={isUserUpdating}
        onClick={setUsername}
      >
        Edit Name
      </button>
    </div>
  );
}

export default ChangeUsername;
