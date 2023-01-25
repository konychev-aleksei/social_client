import { useEffect } from "react";
import auth from "../constants/firebase";
import { setCurrentUser, clearCurrentUser } from "../app/reducers/currentUser";
import { useDispatch } from "react-redux";

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const { email, displayName } = user;
          const nick = email.split("@gmail")[0];

          const token = await user.getIdToken();
          sessionStorage.setItem("auth", token);

          dispatch(setCurrentUser({ nick, displayName }));
        } else {
          dispatch(clearCurrentUser());
          sessionStorage.removeItem("auth");
        }
      });
    })();
  }, [dispatch]);

  return Boolean(sessionStorage.getItem("auth"));
};

export default useAuth;
