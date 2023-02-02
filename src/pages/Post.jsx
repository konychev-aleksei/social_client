import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetByIdQuery } from "../app/reducers/postApi";
import Error from "../UI/Error";
import Loading from "../UI/Loading";
import Post from "../components/Form/Post";
import Form from "../components/Form/Form";
import style from "./style.module.scss";

const PostPage = () => {
  const [editing, setEditing] = useState(false);

  const { id } = useParams();
  const { data: post, isLoading, error, refetch } = useGetByIdQuery(id);

  if (isLoading) {
    return <Loading />;
  } else if (error) { 
    return <Error />;
  } else if (post) {
    return (
      <div className={style.wrapper}>
        {editing ? (
          <Form post={post} setEditing={setEditing} refetch={refetch} />
        ) : (
          <Post post={post} setEditing={setEditing} />
        )}
      </div>
    );
  }

  return null;
};

export default PostPage;
