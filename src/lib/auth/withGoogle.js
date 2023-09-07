import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
// provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

const auth = getAuth();

export default function signInGooglePopUp(
  context,
  onSuccess = (user, token) => { return 0 },
  onError = (errorCode, errorMessage, email) => { return 0 }
) {
  signInWithPopup(auth, provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      onSuccess(user, token);
    })
    .catch((error) => {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      onError(errorCode, errorMessage, email);
      // ...
    });
}
