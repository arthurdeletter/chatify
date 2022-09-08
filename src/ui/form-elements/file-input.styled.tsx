import styled from "styled-components";

export const FileInputContainer = styled.div({
  "> label": {
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
    fontSize: ".9rem",
    color: "rgba(0, 0, 0, .9)",
    fontWeight: "bold",
    cursor: "pointer",
    "> svg": {
      width: "1.5rem",
      aspectRatio: "1/1",
    },
    ":hover, :focus": {
      color: "var(--clr-accent)",
    },
  },
  "> input": {
    display: "none",
  },
});
