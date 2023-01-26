import Post from "../../components/Post/Post";
import Header from "../../components/Header/Header";
import style from "./style.module.scss";

const PostPage = () => {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Post />
      </div>
    </>
  );
};

export default PostPage;
