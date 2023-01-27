import style from "./style.module.scss";
import { IconButton } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SmallPost = ({ id, imageSrc }) => (
  <>
    <Link className={style.smallPost} to={`/post/${id}`}>
      <img src={imageSrc} alt="" />
    </Link>
    <div className={style.author}>
      <img src="" alt="" />
      <p>245</p>
      <FavoriteBorder />
    </div>
  </>
);

export default SmallPost;
