import styled from "styled-components";

export const UserSearchContainer = styled.div({
  display: "flex",
  alignItems: "center",
  gap: ".5rem",
  color: "#666",
  svg: {
    width: "1.25rem",
    height: "1.25rem",
    verticalAlign: "middle",
  },
  "> input": {
    border: "none",
    outline: "none",
    fontSize: ".9rem",
    lineHeight: "2",
    flex: "1",
    ":focus": {
      outline: "none",
    },
  },
  ":focus-within": {
    color: "var(--clr-accent)",
  },
});
