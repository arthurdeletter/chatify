import styled from "styled-components";

export const InputContainer = styled.div({
  display: "flex",
  alignItems: "center",
  border: "1px solid lightgray",
  borderRadius: "6px",
  padding: ".75rem 1rem",
  position: "relative",
  transition: ".25s border, .25s box-shadow",
  outline: "none",
  "> .prefix": {
    marginRight: ".5rem",
  },
  "> .postfix": {
    marginLeft: ".5rem",
  },
  "> input": {
    fontSize: "1rem",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    flex: "100%",
    fontFamily: "inherit",
  },
  ":focus-within": {
    border: "1px solid var(--clr-primary)",
    boxShadow: "0px 0px 0px 3px rgba(49, 21, 127, 0.5)",
  },
});

export const Fixture = styled.span({
  color: "rgba(0, 0, 0, .5)",
  fontSize: "1.2rem",
});
