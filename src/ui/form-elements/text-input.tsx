import { ChangeEvent, ChangeEventHandler } from "react";
import { Fixture, InputContainer } from "./text-input.styled";

type InputProps = {
  prefix?: string;
  suffix?: string;
  value: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const TextInput = ({
  prefix,
  suffix,
  value,
  name,
  placeholder,
  onChange,
  type,
  required,
  ...props
}: InputProps) => {
  return (
    <InputContainer>
      {prefix && <Fixture className="prefix">{prefix}</Fixture>}
      <input
        type={type ?? "text"}
        value={value}
        placeholder={placeholder}
        name={name}
        id={name}
        onChange={onChange}
        required={required}
        {...props}
      />
      {suffix && <Fixture className="postfix">{suffix}</Fixture>}
    </InputContainer>
  );
};
