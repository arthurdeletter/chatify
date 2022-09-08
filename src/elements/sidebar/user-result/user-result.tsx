import { Avatar } from "../../../ui";
import { UnreadBadge } from "../user-list/user-list.styled";
import { UserBox, UserInfo } from "./user-result.styled";

type UserResultProps = {
  src?: string;
  name: string;
  lastChat?: string;
  read?: boolean;
};

export const UserResult = ({ src, name, lastChat, read }: UserResultProps) => {
  return (
    <UserBox align="center" gap={1}>
      <Avatar src={src} alt={name} />
      <UserInfo>
        <span>{name}</span>
        {lastChat && <p>{lastChat}</p>}
      </UserInfo>
      {!read && <UnreadBadge />}
    </UserBox>
  );
};
