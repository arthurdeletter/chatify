import {
  Button,
  FileInput,
  Form,
  FormElement,
  InputLabel,
  TextInput,
} from "../../ui";
import { LoginContainer } from "./login.styled";

export const Login = () => {
  return (
    <LoginContainer>
      <Form
        title="Welcome back!"
        description="Log in and let your friends know you haven't forgotten them."
        redirect={{
          description: "Not a part of the family yet?",
          value: "Sign up",
          to: "/register",
        }}
      >
        <FormElement>
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextInput value="" name="email" />
        </FormElement>

        <FormElement>
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextInput value="" name="password" />
        </FormElement>

        <Button size="md">Sign in</Button>
      </Form>
    </LoginContainer>
  );
};
