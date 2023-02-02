import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../app/reducers/currentUser";
import style from "./style.module.scss";

const sx = {
  border: "3px solid #FFAFBD",
  width: "65px",
  height: "65px",
  "& > *": {
    color: "#FFAFBD",
  },
};

const NewPostButton = () => {
  const currentUser = useSelector(getCurrentUser);

  if (!currentUser) {
    return null;
  }

  return (
    <Link className={style.createNewPost} to="/post/create">
      <Button sx={sx}>
        <Add />
      </Button>
    </Link>
  );
};

export default NewPostButton;
