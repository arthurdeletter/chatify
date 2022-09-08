import { Avatar, Button, Flex, IconButton } from "../../ui";
import { NavbarContainer, UserWrapper } from "./navbar.styled";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { useLogout, useMe } from "../../context/auth-context";

export const Navbar = () => {
  const logout = useLogout();
  const user = useMe();
  console.log(user);
  return (
    <NavbarContainer>
      <h3>Chatifeye</h3>
      <UserWrapper gap={2} align="center">
        <Flex align="center" gap={0.5}>
          <Avatar src={user?.photoURL} />
          <span>{user?.displayName || ""}</span>
        </Flex>
        <IconButton onClick={logout}>
          <ArrowRightOnRectangleIcon />
        </IconButton>
      </UserWrapper>
    </NavbarContainer>
  );
};
