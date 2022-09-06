import {
  Button,
  FileInput,
  Flex,
  Form,
  FormElement,
  InputLabel,
  TextInput,
} from "../../ui";
import { RegisterContainer } from "./register.styled";

export const Register = () => {
  return (
    <RegisterContainer>
      <Form
        title="Welcome to Chatify"
        description="Create your free account and start chatting with yout friends."
        redirect={{
          description: "Already a member?",
          value: "Sign in",
          to: "/login",
        }}
      >
        <FormElement>
          <InputLabel htmlFor="dname">Display name</InputLabel>
          <TextInput value="" name="dname" />
        </FormElement>

        <FormElement>
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextInput value="" name="email" />
        </FormElement>

        <FormElement>
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextInput value="" name="password" />
        </FormElement>

        <FileInput name="avatar" label="Select your Avatar" fileType="image" />

        <Button size="md">Sign up</Button>
      </Form>
    </RegisterContainer>
  );
};
