import style from "./style.module.scss";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";

import SmallPost from "../../components/Post/SmallPost";
import Categories from "../../components/Categories/Categories";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../app/reducers/currentUser";

import { useGetQuery } from "../../app/reducers/postApi";

import { useLocation } from "react-router-dom";

const sx = {
  border: "3px solid #FFAFBD",
  width: "65px",
  height: "65px",
  "& > *": {
    color: "#FFAFBD",
  },
};

const NewPostButton = () => {
  const { displayName } = useSelector(getCurrentUser);

  if (!displayName) {
    return null;
  }

  return (
    <Link className={style.createNewPost} to="/post/create">
      <Button sx={sx}>
        <Add />
      </Button>
    </Link>
  );
};

export const PostsList = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const tag = params.get("tag");

  const { data: posts, isLoading, error } = useGetQuery(tag);

  if (isLoading) {
    return null;
  } else if (error) {
    return null;
  } else if (posts) {
    return (
      <div className={style.grid}>
        {posts.map((post) => (
          <SmallPost {...post} />
        ))}
      </div>
    );
  }

  return null;
};

const Home = () => {
  return (
    <div className={style.wrapper}>
      <Categories />
      <PostsList />
      <NewPostButton />
    </div>
  );
};

export default Home;
