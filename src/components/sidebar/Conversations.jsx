import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
      {conversations &&
        conversations.map((conversation, idx) => (
          <Conversation
            key={idx}
            conversation={conversation}
            lastIndex={idx === conversations.length - 1}
          />
        ))}
    </div>
  );
};

export default Conversations;
