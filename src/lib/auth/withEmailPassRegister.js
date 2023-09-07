import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth();

export default function signUpWithEmailPassword(
  email,
  password,
  onSuccess = (user) => { return 0 },
  onError = (errorCode, errorMessage, email) => { return 0 }
) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(function (userCredential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const user = userCredential.user;
      onSuccess(user);
    })
    .catch((error) => {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;

      onError(errorCode, errorMessage, email);
      // ...
    });
}
