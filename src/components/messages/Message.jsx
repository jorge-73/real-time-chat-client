import { useAuth } from "../../contexts/AuthContext";
import useConversation from "../../store/useConversation";
import moment from "moment";

const Message = ({ message }) => {
  const { user } = useAuth();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === user._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? user.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profilePic} />
          </div>
        </div>
        <div
          className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}
        >
          {message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          {moment(message.createdAt).calendar()}
        </div>
      </div>
      {/* <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble text-white bg-blue-500">I hate you!</div>
        <div className="chat-footer opacity-50 flex gap-1 items-center">
          Seen at 12:46
        </div>
      </div> */}
    </div>
  );
};

export default Message;
