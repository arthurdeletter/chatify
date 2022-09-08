import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, storage, db } from "../../firebase";

export type RegisterProps = {
  email: string;
  password: string;
  dname: string;
  file: File;
};

export const registerUser = async ({
  email,
  password,
  dname,
  file,
}: RegisterProps) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);

  const storageRef = ref(storage, `${dname}_avatar`);

  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => console.log(error),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        console.log("in update");
        await updateProfile(response.user, {
          displayName: dname,
          photoURL: downloadURL,
        });
        await setDoc(doc(db, "users", response.user.uid), {
          uid: response.user.uid,
          displayName: dname,
          email: email,
          photoUrl: downloadURL,
        });

        await setDoc(doc(db, "userChats", response.user.uid), {});
      });
    }
  );
};
