import { UserList } from "./user-list/user-list";
import { UserSearch } from "./user-search/user-search";
import { SidebarContainer, SidebarTop } from "./sidebar.styled";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTop>
        <UserSearch name="user-search" placeholder="Search username..." />
      </SidebarTop>
      <UserList />
    </SidebarContainer>
  );
};
