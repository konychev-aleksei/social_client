import style from "./style.module.scss";
import { Link } from "react-router-dom";

const SmallPost = ({ id, author_nick }) => {
  const imageSource = "http://localhost:5005/image/" + 1 + ".png";

  return (
    <Link to={`/post/${id}`} className={style.smallPost}>
      <img src={imageSource} alt="" />
      <h3>{author_nick}</h3>
    </Link>
  );
};

export default SmallPost;
