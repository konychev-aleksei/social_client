import Tags from "../components/Tags/Tags";
import PostsList from "../components/PostsList/PostsList";
import NewPostButton from "../UI/NewPostButton";
import style from "./style.module.scss";
import cn from "classnames";

const HomePage = () => (
  <div className={cn(style.wrapper, style.column)}>
    <Tags />
    <PostsList />
    <NewPostButton />
  </div>
);

export default HomePage;
