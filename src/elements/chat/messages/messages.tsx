import { Message } from "./message/message";
import { MessagesContainer } from "./messages.styled";

export const Messages = () => {
  return (
    <MessagesContainer>
      <Message />
      <Message owner />
      <Message />
      <Message />
      <Message owner />
      <Message />
    </MessagesContainer>
  );
};
