import { FC } from "react";
import { Avatar } from "../../../../ui";
import { MessageContainer, MessageContent } from "./message.styled";

export const Message: FC<{ owner?: boolean }> = ({ owner = false }) => {
  return (
    <MessageContainer gap={1} align="end" reverse={owner}>
      <Avatar src="https://images.pexels.com/photos/13339064/pexels-photo-13339064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <MessageContent owner={owner} >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id rem magni
          nisi, minus a voluptates placeat nihil labore veritatis distinctio.
        </p>
      </MessageContent>
    </MessageContainer>
  );
};
