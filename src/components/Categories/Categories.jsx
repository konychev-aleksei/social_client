import style from "./style.module.scss";
import { Link } from "react-router-dom";
import useTag from "../../hooks/useTag";
import { categories } from "../../constants";
import cn from "classnames";

const Categories = () => {
  const tag = useTag();

  return (
    <div className={style.categories}>
      {categories.map((category) => (
        <Link
          className={cn(style.category, tag == category.tag && style.selected)}
          to={`/home?tag=${category.tag}`}
        >
          <img src={category.image} alt="" />
          <p>{category.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
