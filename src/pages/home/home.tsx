import { Chat } from "../../elements/chat/chat";
import { AppLayout, HomeContainer } from "./home.styled";
import { Sidebar } from "../../elements/sidebar/sidebar";
import { Navbar } from "../../elements/navbar/navbar";

export const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <AppLayout>
        <Sidebar />
        <Chat />
      </AppLayout>
    </HomeContainer>
  );
};
