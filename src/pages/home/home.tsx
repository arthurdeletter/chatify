import { Chat } from "./chat/chat";
import { HomeContainer } from "./home.styled";
import { Sidebar } from "./sidebar/sidebar";

export const Home = () => {
  return (
    <HomeContainer>
      <Sidebar />
      <Chat />
    </HomeContainer>
  );
};
