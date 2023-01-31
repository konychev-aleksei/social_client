import style from "./style.module.scss";
import { Link } from "react-router-dom";
import useImageSource from "../../hooks/useImageSource";

const SmallPost = ({ id, author_nick }) => {
  const imageSource = useImageSource(id);

  return (
    <Link to={`/post/${id}`} className={style.smallPost}>
      <img src={imageSource} alt="" />
      <h3>{author_nick}</h3>
    </Link>
  );
};

export default SmallPost;
