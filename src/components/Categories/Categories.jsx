import style from "./style.module.scss";
import { Link, useLocation } from "react-router-dom";
import categories from "../../constants/categories";
import cn from "classnames";

const Categories = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const tag = params.get("tag");

  return (
    <div className={style.categories}>
      {categories.map((category) => (
        <Link
          className={cn(style.category, tag == category.tag && style.selected)}
          to={`/search?tag=${category.tag}`}
        >
          <img src={category.image} alt="" />
          <p>{category.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
