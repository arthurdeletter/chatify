import { FileInput, Flex, IconButton } from "../../../ui";
import { MessageFormContainer, MessageInput } from "./message-form.styled";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export const MessageForm = () => {
  return (
    <MessageFormContainer align="center" justify="between">
      <MessageInput
        type="text"
        name="message"
        placeholder="Write your message..."
      />
      <Flex align="center" gap={0.5}>
        <FileInput name="file-select" fileType="file" />
        <FileInput name="image-select" fileType="image" />
        <IconButton color="primary" type="submit">
          <PaperAirplaneIcon />
        </IconButton>
      </Flex>
    </MessageFormContainer>
  );
};
