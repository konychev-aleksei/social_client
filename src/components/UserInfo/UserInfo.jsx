import { useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../app/reducers/currentUser";
import style from "./style.module.scss";

const UserInfo = () => {
  const { nick } = useSelector(getCurrentUser);
  return <h3 className={style.info}>@{nick}</h3>;
};

export default UserInfo;
