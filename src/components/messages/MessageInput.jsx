import { BsSend } from "react-icons/bs";
import { useForm } from "react-hook-form";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const { register, setValue, handleSubmit } = useForm();
  const { loading, sendMessage } = useSendMessage();

  const onSubmit = handleSubmit(async (message) => {
    if (!message) return;
    await sendMessage(message);
    setValue("message", "");
  });

  return (
    <form className="px-4 my-3" onSubmit={onSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          {...register("message" /* , { required: true } */)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 text-white hover:text-gray-300 hover:transition-colors"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
