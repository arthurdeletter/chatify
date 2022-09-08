import React from "react";
import styled from "styled-components";

type IconButtonProps = {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: "default" | "primary" | "success" | "warning" | "error" | "info";
  type?: "submit" | "reset" | "button";
};

const COLORS = {
  default: {
    color: "#000",
    backgroundColor: "transparent",
  },
  primary: {
    color: "#fff",
    backgroundColor: "var(--clr-primary)",
  },
  success: {
    color: "#fff",
    backgroundColor: "var(--clr-success)",
  },
  warning: {
    color: "#fff",
    backgroundColor: "var(--clr-warning)",
  },
  error: {
    color: "#fff",
    backgroundColor: "var(--clr-error)",
  },
  info: {
    color: "#fff",
    backgroundColor: "var(--clr-info)",
  },
};

const IconButtonContainer = styled.button<IconButtonProps>(({ color }) => ({
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "50%",
  display: "grid",
  placeItems: "center",
  border: "none",
  cursor: "pointer",
  transition: ".5s ease background-color, .5s ease filter",
  ...(color && COLORS[color]),
  "> svg": {
    width: "1.25rem",
    aspectRatio: "1 / 1",
  },
  ":hover, :focus": {
    ...(color === "default"
      ? { backgroundColor: "rgba(0, 0, 0, .05)" }
      : { filter: "brightness(150%)" }),
    outline: "none",
  },
}));

export const IconButton = ({
  children,
  onClick,
  color = "default",
  type = "button",
}: IconButtonProps) => {
  return (
    <IconButtonContainer onClick={onClick} color={color} type={type}>
      {children}
    </IconButtonContainer>
  );
};
