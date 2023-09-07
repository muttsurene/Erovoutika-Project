import { signOut, getAuth } from "firebase/auth";

const auth = getAuth();

export default () => signOut(auth);