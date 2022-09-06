import {
  FormElementContainer,
  FormElementDescription,
} from "./form-element.styled";

type FormElementProps = {
  children?: React.ReactNode;
  description?: string;
};

export const FormElement = ({ children, description }: FormElementProps) => {
  return (
    <FormElementContainer>
      {children}
      {description && (
        <FormElementDescription>{description}</FormElementDescription>
      )}
    </FormElementContainer>
  );
};
