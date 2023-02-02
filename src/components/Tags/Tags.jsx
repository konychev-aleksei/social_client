import style from "./style.module.scss";
import { Link } from "react-router-dom";
import useTag from "../../hooks/useTag";
import { tagsList } from "../../constants";
import cn from "classnames";

const Tags = () => {
  const currentTag = useTag();

  return (
    <div className={style.tags}>
      {tagsList.map((tag) => (
        <Link
          key={tag.id}
          className={cn(style.tag, currentTag == tag.id && style.selected)}
          to={`/home?tag=${tag.id}`}
        >
          <img src={tag.image} alt="" />
          <p>{tag.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Tags;
