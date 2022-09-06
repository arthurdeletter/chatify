import {
  ErrorIndicator,
  InputLabelWrapper,
  OptionalIndicator,
} from "./input-label.styled";

type InputLabelProps = {
  children?: React.ReactNode;
  optional?: boolean;
  error?: string;
  htmlFor: string;
}

export const InputLabel = ({
  children,
  optional,
  error,
  htmlFor,
  ...props
}: InputLabelProps) => {
  return (
    <InputLabelWrapper htmlFor={htmlFor} {...props}>
      {children}
      {error && <ErrorIndicator>{error}</ErrorIndicator>}
      {optional && <OptionalIndicator>(optional)</OptionalIndicator>}
    </InputLabelWrapper>
  );
};
