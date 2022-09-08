import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export type LoginProps = {
  email: string;
  password: string;
};

export const loginUser = async ({ email, password }: LoginProps) => {
  let user;
  signInWithEmailAndPassword(auth, email, password).then(
    (userCreds) => (user = userCreds.user)
  );
  return user;
};
