import style from "./style.module.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { LogoutOutlined, LoginOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { getCurrentUser } from "../../app/reducers/currentUser";

const Header = () => {
  const currentUser = useSelector(getCurrentUser);
  const { handleLogOut, handleSignIn } = useAuth();

  const homePageLink = (
    <Link to="/home" className={style.home}>
      <img className={style.logo} src="/logo.png" alt="" />
      <p>Фотогалерея</p>
    </Link>
  );

  const authButton = currentUser ? (
    <>
      <p className={style.myProfile} to={`/profile/${currentUser}`}>
        {currentUser}
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
