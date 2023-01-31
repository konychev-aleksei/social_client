import SmallPost from "../../components/Post/SmallPost";
import { useGetQuery } from "../../app/reducers/postApi";
import useTag from "../../hooks/useTag";
import DataProvider from "../../UI/DataProvider/DataProvider";
import style from "./style.module.scss";

export const PostsList = () => {
  const tag = useTag();
  const { data: posts, isLoading, error } = useGetQuery(tag);

  return (
    <DataProvider data={posts} isLoading={isLoading} error={error}>
      <div className={style.grid}>
        {posts && posts.map((post) => <SmallPost {...post} />)}
      </div>
    </DataProvider>
  );
};

export default PostsList;