import { Chip } from "@mui/material";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../app/reducers/currentUser";
import {
  useToggleLikeMutation,
  useDeleteByIdMutation,
} from "../../app/reducers/postApi";
import useAuth from "../../hooks/useAuth";
import useImageSource from "../../hooks/useImageSource";
import LikeButton from "../../UI/LikeButton";
import { ERROR } from "../../constants";
import { useNavigate } from "react-router-dom";

const Post = ({ post, setEditing }) => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  const [deleteById] = useDeleteByIdMutation();
  const [toggleLike, { isLoading: isLikeToggling }] = useToggleLikeMutation();

  const currentUser = useSelector(getCurrentUser);

  const {
    id,
    author_nick,
    description,
    tags,
    likes_count,
    is_liked,
    created_on,
  } = post;

  const imageSource = useImageSource(id);
  const canEdit = isAuth && author_nick === currentUser;

  const handleDeletePost = async () => {
    const { error } = await deleteById(id);

    if (error) {
      alert(ERROR);
      return;
    }

    navigate("/home");
  };

  const handleToggleLike = async () => {
    const { error } = await toggleLike(id);

    if (error) {
      alert(ERROR);
    }
  };

  return (
    <div className={style.form}>
      <div className={style.author}>
        <b>{author_nick}</b>
        <LikeButton
          onClick={handleToggleLike}
          isLiked={is_liked}
          count={likes_count}
          disabled={!isAuth || isLikeToggling}
        />
      </div>
      <img className={style.image} src={imageSource} alt="" />
      {canEdit && (
        <div className={style.controls}>
          <button onClick={() => setEditing(true)}>Редактировать</button>
          <button onClick={handleDeletePost}>Удалить</button>
        </div>
      )}
      <p>{description}</p>
      <div className={style.tags}>
        {tags.map((tag) => (
          <Chip key={tag.tag} label={tag.name} />
        ))}
      </div>
      <i>{created_on}</i>
    </div>
  );
};

export default Post;
