import styled from "styled-components";

export const SidebarContainer = styled.aside({
  flex: ".25",
  height: "100%",
  display: "grid",
  gridTemplateRows: "auto 1fr",
  gap: "1rem",
  "@media (max-width: 48rem)": {
    display: "none",
  },
});

export const SidebarTop = styled.div({
  padding: "0 1.5rem",
});
