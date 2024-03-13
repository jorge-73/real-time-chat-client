import { useState } from "react";
import useConversation from "../store/useConversation";
import toast from "react-hot-toast";
import { sendMessageRequest } from "../api/messages";

const useMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await sendMessageRequest(message, selectedConversation._id);
      if (res.error) throw new Error(res.error);
      setMessages([...messages, res.data.payload]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useMessage;
