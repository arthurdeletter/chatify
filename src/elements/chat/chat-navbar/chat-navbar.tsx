import { ActionsContainer, ChatNavContainer } from "./chat-navbar.styled";
import {
  VideoCameraIcon,
  UserPlusIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import { Avatar, Flex, IconButton } from "../../../ui";

export const ChatNavbar = () => {
  return (
    <ChatNavContainer align="center" justify="between">
      <Flex gap={1} align="center">
        <Avatar src="https://images.pexels.com/photos/13339064/pexels-photo-13339064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <h3>Phaedra Van Huffel</h3>
      </Flex>
      <ActionsContainer align="center" gap={0.5}>
        <IconButton>
          <VideoCameraIcon />
        </IconButton>
        <IconButton>
          <UserPlusIcon />
        </IconButton>
        <IconButton>
          <EllipsisHorizontalIcon />
        </IconButton>
      </ActionsContainer>
    </ChatNavContainer>
  );
};
