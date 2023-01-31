import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetByIdQuery } from "../../app/reducers/postApi";
import style from "./style.module.scss";

import Post from "../../components/Form/Post";
import Form from "../../components/Form/Form";

import DataProvider from "../../UI/DataProvider/DataProvider";

const PostPage = () => {
  const [editing, setEditing] = useState(false);

  const { id } = useParams();
  const { data: post, isLoading, error, refetch } = useGetByIdQuery(id);

  return (
    <DataProvider data={post} isLoading={isLoading} error={error}>
      {post && (
        <div className={style.wrapper}>
          {editing ? (
            <Form post={post} setEditing={setEditing} refetch={refetch} />
          ) : (
            <Post post={post} setEditing={setEditing} />
          )}
        </div>
      )}
    </DataProvider>
  );
};

export default PostPage;
