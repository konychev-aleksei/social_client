import { Button, Chip } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../app/reducers/currentUser";
import { useToggleLikeMutation } from "../../app/reducers/postApi";
import useAuth from "../../hooks/useAuth";
import useImageSource from "../../hooks/useImageSource";

const sx = {
  color: "black",
};

const Post = ({ post, setEditing }) => {
  const { isAuth } = useAuth();

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

  const imageSource = useImageSource(id);
  const currentUser = useSelector(getCurrentUser);
  const canEdit = isAuth && author_nick === currentUser;

  const handleToggleLike = () => {
    toggleLike(id);
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
