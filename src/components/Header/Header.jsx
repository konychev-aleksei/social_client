import { useEffect } from "react";
import style from "./style.module.scss";
import { TextField, Button, IconButton } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LogoutOutlined, LoginOutlined, Search } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../app/reducers/currentUser";
import auth from "../../constants/firebase";
import firebase from "firebase/compat/app";

const Header = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { register, handleSubmit, setValue } = useForm();
  const { nick } = useSelector(getCurrentUser);

  const onSubmit = (data) => {
    const query = data.search;

    if (!query) {
      return;
    }

    navigate(`/search?query=${query}`);
  };

  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const handleLogOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    const params = new URLSearchParams(search);

    const tag = params.get("tag");
    const query = params.get("query");

    if (tag) {
      setValue("tag", tag);
    }

    if (query) {
      setValue("query", query);
    }
  }, []);

  const authButton = nick ? (
    <>
      <Link className={style.myProfile} to={`/profile/${nick}`}>
        {nick}
      </Link>
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
      <Link to="/search">
        <img
          className={style.logo}
          src="https://sunrust.org/wiki/images/a/a9/Gallery_icon.png"
          alt=""
        />
        <p>Фотогалаеря</p>
      </Link>
      <form className={style.search} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          placeholder="Поиск"
          type="search"
          variant="standard"
          inputProps={{ style: { textAlign: "center" } }}
          {...register("search")}
        />
        <IconButton type="submit">
          <Search />
        </IconButton>
      </form>
      {authButton}
    </div>
  );
};

export default Header;
