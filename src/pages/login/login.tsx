import { FormEvent, useState } from "react";
import { useLogin } from "../../context/auth-context";
import { Button, Form, FormElement, InputLabel, TextInput } from "../../ui";
import { LoginContainer } from "./login.styled";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { login, loading, error } = useLogin();
  const navigate = useNavigate();

  const emptyUser = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(emptyUser);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = user;
    login({ email, password });
    navigate("/");
  };

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
        onSubmit={handleLogin}
      >
        <FormElement>
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextInput
            value={user.email}
            name="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </FormElement>

        <FormElement>
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextInput
            value={user.password}
            name="password"
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </FormElement>

        <Button size="md" type="submit" isLoading={loading}>
          Sign in
        </Button>
      </Form>
    </LoginContainer>
  );
};
