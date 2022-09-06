import styled from "styled-components";

type TextAreaProps = {
  value: string;
  placeholder?: string;
};

const TextAreaContainer = styled.textarea({
  border: "1px solid lightgray",
  borderRadius: "6px",
  padding: ".5rem .75rem",
  position: "relative",
  transition: ".25s border, .25s box-shadow",
  outline: "none",
  resize: "vertical",
  minHeight: "6rem",
  fontFamily: "inherit",
  fontSize: "1rem",
  ":focus-within": {
    border: "1px solid #3498db",
    boxShadow: "0px 0px 0px 3px rgba(52,152,219,.5)",
  },
});

export const TextArea = ({ value, placeholder, ...props }: TextAreaProps) => {
  return (
    <TextAreaContainer placeholder={placeholder} value={value} {...props} />
  );
};
