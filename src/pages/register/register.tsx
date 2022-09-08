import React, { FormEvent, useState } from "react";
import {
  Button,
  FileInput,
  Form,
  FormElement,
  InputLabel,
  TextInput,
} from "../../ui";
import { RegisterContainer } from "./register.styled";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../context/auth-context";

export const Register = () => {
  const navigate = useNavigate();
  const emptyUser: {
    dname: string;
    email: string;
    password: string;
    avatar: File | null;
  } = {
    dname: "",
    email: "",
    password: "",
    avatar: null,
  };
  const [user, setUser] = useState(emptyUser);
  const { register, loading, error } = useRegister();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { dname, email, password, avatar: file } = user;
    if (dname !== "" && email !== "" && password !== "" && file !== null) {
      register({ email, password, dname, file });
      navigate("/");
    }
  };

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
        onSubmit={handleSubmit}
      >
        <FormElement>
          <InputLabel htmlFor="dname">Display name</InputLabel>
          <TextInput
            value={user.dname}
            name="dname"
            required
            onChange={(e) => setUser({ ...user, dname: e.target.value })}
          />
        </FormElement>

        <FormElement>
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextInput
            value={user.email}
            name="email"
            type="email"
            required
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </FormElement>

        <FormElement>
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextInput
            value={user.password}
            name="password"
            type="password"
            required
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </FormElement>

        <FileInput
          name="avatar"
          label="Select your Avatar"
          fileType="image"
          required
          onChange={(e) =>
            setUser({ ...user, avatar: e.target.files && e.target.files[0] })
          }
        />

        <Button size="md" type="submit" isLoading={loading}>
          Sign up
        </Button>
      </Form>
    </RegisterContainer>
  );
};
