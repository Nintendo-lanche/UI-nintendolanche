import { useRef, useState } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import Message from "./Message";
import Navbar from "../components/Navbar";
import Image from "next/image";

// SHows messages for the last 15 seconds
const MINS_DURATION = 0.5;

function Messages(message) {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="pb-16 h-screen6">
      <div className="flex flex-row-reverse justify-between pt-4">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-96 mx-auto">
          <h1 className="text-xl p-3 bg-gradient-to-t from-red-200 border-red-700/[.9]  border-t-2 shadow-2xl rounded-full ">
            AVA GAMECENTER
          </h1>
          <div className="mt-8">
            <div className="flex flex-col items-center p-1 text-black border-red-300 border-b-2 bg-gradient-to-t from-red-300 rounded-xl shadow-xl">
              <ol className="flex text-sm flex-col items-center w-96">
                <li className="p-1">Create New Game and stake AVAX.</li>
                <li className="p-1">Share Gamecode in the Chatroom.</li>
                <li className="p-1">Wait for competitor to join your game.</li>
                <li className="p-1">Winner gets prizepot</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="sticky w-64  flex-col pt-2 overflow-y-scroll scrollbar-hide bg-gradient-to-b from-slate-700/[.2] to-teal-800/[.05] rounded-3xl border-t-2 border-red-800 shadow-lg">
          <h1 className="sticky max-h-3/6 top-0 flex overflow-hide justify-center text-bold text-lg py-2 shadow-lg z-50">
            Chat Room
          </h1>
          <div className="grid grid-cols-1 item-end space-y-8">
            {data.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div
        ref={endOfMessagesRef}
        className="text-start text-gray-800 mt-5 pl-16"
      >
        <p>Your'e up to date {user.getUsername()}!</p>
      </div>
    </div>
  );
}

export default Messages;
