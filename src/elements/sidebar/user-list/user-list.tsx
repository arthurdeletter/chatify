import { UserResult } from "../user-result/user-result";
import { UserListContainer } from "./user-list.styled";

export const UserList = () => {
  return (
    <UserListContainer>
      <UserResult
        src="https://images.pexels.com/photos/13339064/pexels-photo-13339064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        name="Phaedra"
        lastChat="Come see me"
        read={true}
      />
    </UserListContainer>
  );
};
