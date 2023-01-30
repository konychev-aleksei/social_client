import { Button, Chip } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import style from "./style.module.scss";
import useIsAuth from "../../hooks/useIsAuth";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../app/reducers/currentUser";
import { useToggleLikeMutation } from "../../app/reducers/postApi";

const sx = {
  color: "black",
};

const Post = ({ post, setEditing }) => {
  const {
    id,
    author_nick,
    description,
    tags,
    likes_count,
    is_liked,
    created_on,
  } = post;

  const [toggleLike] = useToggleLikeMutation();

  const imageSource = "http://localhost:5005/image/" + id + ".png";

  const isAuth = useIsAuth();

  const { nick } = useSelector(getCurrentUser);

  const canEdit = isAuth && author_nick === nick;

  const handleToggleLike = async () => {
    const a = await toggleLike(id);
    console.log(a);
  };

  return (
    <div className={style.form}>
      <div className={style.author}>
        <b>{author_nick}</b>
        <Button
          onClick={handleToggleLike}
          disabled={!isAuth}
          sx={sx}
          startIcon={
            !is_liked ? <Favorite sx={{ color: "red" }} /> : <FavoriteBorder />
          }
        >
          {likes_count}
        </Button>
      </div>
      <img className={style.image} src={imageSource} alt="" />
      {canEdit && (
        <div className={style.controls}>
          <button onClick={() => setEditing(true)}>Редактировать</button>
          <button>Удалить</button>
        </div>
      )}
      <p>{description}</p>
      <div className={style.tags}>
        {tags.map((tag) => (
          <Chip label={tag.name} />
        ))}
      </div>
      <i>{created_on}</i>
    </div>
  );
};

export default Post;
