import React from "react";
import styled from "styled-components";

type ButtonType = {
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "error"
    | "info";
  disabled?: boolean;
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button";
};

const COLORS = {
  primary: {
    color: "#fff",
    backgroundColor: "var(--clr-primary);",
  },
  secondary: {
    color: "var(--clr-primary)",
    backgroundColor: "transparent",
    border: "2px solid var(--clr-primary)",
  },
  tertiary: {
    color: "var(--clr-primary)",
    backgroundColor: "transparent",
    textDecoration: "underline",
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

const SIZES = {
  sm: {
    padding: ".5rem 1.75rem",
    fontSize: ".9rem",
  },
  md: {
    padding: ".75rem 2rem",
    fontSize: "1rem",
  },
  lg: {
    padding: "1rem 2.25rem",
    fontSize: "1.2rem",
  },
};

const DISABLEDLOADING = {
  cursor: "not-allowed",
  opacity: ".5",
};

export const BaseButton = styled.button<ButtonType>(
  ({ color, disabled, isLoading, size }) => ({
    flexShrink: 0,
    fontWeight: "700",
    borderRadius: ".25em",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    textAlign: "center",
    ...(size && SIZES[size]),
    ...(color && COLORS[color]),
    ...((disabled || isLoading) && DISABLEDLOADING),
    ":hover, :focus": {
      filter: "brightness(85%)",
      outline: "none",
    },
  })
);

export const Button = ({
  children,
  color = "primary",
  disabled,
  isLoading,
  size = "md",
  onClick,
  type = "button",
  ...props
}: ButtonType) => {
  return (
    <BaseButton
      color={color}
      disabled={disabled}
      isLoading={isLoading}
      size={size}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </BaseButton>
  );
};
