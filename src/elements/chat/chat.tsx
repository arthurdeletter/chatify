import { ChatNavbar } from "./chat-navbar/chat-navbar";
import { ChatContainer } from "./chat.styled";
import { MessageForm } from "./message-form/message-form";
import { Messages } from "./messages/messages";

export const Chat = () => {
  return (
    <ChatContainer>
      <ChatNavbar />
      <Messages />
      <MessageForm />
    </ChatContainer>
  );
};
