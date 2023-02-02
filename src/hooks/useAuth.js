import { useEffect } from "react";
import auth from "../config/firebase";
import { setCurrentUser, clearCurrentUser } from "../app/reducers/currentUser";
import { useDispatch } from "react-redux";
import firebase from "firebase/compat/app";

const useAuth = () => {
  const dispatch = useDispatch();

  const isAuth = Boolean(sessionStorage.getItem("auth"));

  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const handleLogOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    (async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const nick = user.email.split("@")[0];

          const token = await user.getIdToken();
          sessionStorage.setItem("auth", token);

          dispatch(setCurrentUser(nick));
        } else {
          dispatch(clearCurrentUser());
          sessionStorage.removeItem("auth");
        }
      });
    })();
  }, [dispatch]);

  return { isAuth, handleSignIn, handleLogOut };
};

export default useAuth;
