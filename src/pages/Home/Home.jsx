import Categories from "../../components/Categories/Categories";
import PostsList from "../../components/PostsList/PostsList"; 
import NewPostButton from "../../UI/NewPostButton";
import style from "./style.module.scss";

const HomePage = () => {
  return (
    <div className={style.wrapper}>
      <Categories />
      <PostsList />
      <NewPostButton />
    </div>
  );
};

export default HomePage;
