import SmallPost from "../../components/Post/SmallPost";
import { useGetQuery } from "../../app/reducers/postApi";
import useTag from "../../hooks/useTag";
import style from "./style.module.scss";
import Error from "../../UI/Error";
import Loading from "../../UI/Loading";

export const PostsList = () => {
  const tag = useTag();
  const { data: posts, isLoading, error } = useGetQuery(tag);

  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  } else if (posts) {
    return (
      <div className={style.grid}>
        {posts && posts.map((post) => <SmallPost {...post} />)}
      </div>
    );
  }

  return null;
};

export default PostsList;
