import styled from "styled-components";

type RedirectType = {
  description: string;
  value: string;
  to: string;
};

type FormProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  redirect?: RedirectType;
};

const FormContainer = styled.form({
  backgroundColor: "#ffffff",
  borderRadius: ".5rem",
  padding: "3rem 2rem",
  boxShadow: "0 0 2rem rgba(0, 0, 0, .1)",
});

const FormHeader = styled.div({
  h2: {
    fontSize: "2.5rem",
    marginBottom: ".5em",
    maxWidth: "20ch",
  },
  p: {
    fontSize: "1rem",
    color: "#585858",
    marginBottom: "1.5em",
    maxWidth: "50ch",
    lineHeight: "1.5",
  },
});

const FormBody = styled.div({
  display: "grid",
  gap: "1rem",
  "> button": {
    marginTop: "1em",
  },
});

const RedirectLink = styled.p({
  color: "var(--clr-dark)",
  textAlign: "center",
  span: {
    marginLeft: ".25rem",
    color: "var(--clr-accent)",
    cursor: "pointer",
    ":hover": {
      textDecoration: "underline",
    },
  },
});

export const Form = ({ title, description, redirect, children }: FormProps) => {
  return (
    <FormContainer>
      <FormHeader>
        <h2>{title}</h2>
        <p>{description}</p>
      </FormHeader>
      <FormBody>
        {children}
        <RedirectLink>
          {redirect?.description}
          <span>{redirect?.value}</span>
        </RedirectLink>
      </FormBody>
    </FormContainer>
  );
};
