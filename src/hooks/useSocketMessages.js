import { useEffect } from "react";
import { useSocket } from "../contexts/SocketContext";
import useConversation from "../store/useConversation";
import notificationSound from "../assets/sound/message.mp3";

const useSocketMessages = () => {
  const { socket } = useSocket();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();

      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useSocketMessages;
