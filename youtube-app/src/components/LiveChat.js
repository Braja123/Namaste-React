import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, makeRandomMessage } from "../constants/helper";
import { addMessage } from "../store/chatSlice";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20)
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);
  return (
    <>
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-auto flex flex-col-reverse">
      {chatMessages.map((chat, index) => (
        <ChatMessage key={index} name={chat.name} message={chat.message + "🙏"} />
      ))}
    </div>
    <form className="w-full p-2 ml-2 border border-black" onSubmit={(e) => {
      e.preventDefault();
      dispatch(
        addMessage({
          name: "Braja Gopal Das",
          message: liveMessage
        })
      );
      setLiveMessage("");
    }}>
      <input className="px-2 w-96 border border-gray-400" type="text" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
      <button className="px-2 mx-2 bg-green-100" type="submit">Comment</button>
    </form>
    </>
  );
};

export default LiveChat;
