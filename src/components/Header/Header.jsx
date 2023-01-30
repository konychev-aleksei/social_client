import style from "./style.module.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { LogoutOutlined, LoginOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../app/reducers/currentUser";
import auth from "../../constants/firebase";
import firebase from "firebase/compat/app";

const Header = () => {
  const { nick } = useSelector(getCurrentUser);

  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const handleLogOut = () => {
    auth.signOut();
  };

  const homePageLink = (
    <Link to="/home" className={style.home}>
      <img className={style.logo} src="/logo.png" alt="" />
      <p>Фотогалерея</p>
    </Link>
  );

  const authButton = nick ? (
    <>
      <p className={style.myProfile} to={`/profile/${nick}`}>
        {nick}
      </p>
      <Button startIcon={<LogoutOutlined />} onClick={handleLogOut}>
        Выйти
      </Button>
    </>
  ) : (
    <Button startIcon={<LoginOutlined />} onClick={handleSignIn}>
      Войти
    </Button>
  );

  return (
    <div className={style.header}>
      {homePageLink}
      {authButton}
    </div>
  );
};

export default Header;
