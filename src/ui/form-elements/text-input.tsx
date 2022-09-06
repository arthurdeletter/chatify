import { Fixture, InputContainer } from "./text-input.styled";

type InputProps = {
  prefix?: string;
  suffix?: string;
  value: string;
  name: string;
  placeholder?: string;
};

export const TextInput = ({
  prefix,
  suffix,
  value,
  name,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <InputContainer>
      {prefix && <Fixture className="prefix">{prefix}</Fixture>}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        name={name}
        id={name}
        {...props}
      />
      {suffix && <Fixture className="postfix">{suffix}</Fixture>}
    </InputContainer>
  );
};
