import style from "./style.module.scss";
import {
  CardHeader,
  Avatar,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { Favorite, FavoriteBorder, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const LeaveComment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.leaveComment}>
      <TextField
        {...register("comment", {
          required: {
            value: true,
            message: "Поле обязательно",
          },
          maxLength: {
            value: 10,
            message: "Максимум - 100 символов",
          },
        })}
        variant="standard"
        placeholder="Комментарий"
        className={style.field}
        error={Boolean(errors.comment)}
        helperText={errors.comment?.message}
      />
      <Button type="submit">Отправить</Button>
    </form>
  );
};

const Comment = ({ date, comment, user }) => {
  return (
    <div className={style.comment}>
      <Link to={`/profile/${user.nick}`} className={style.userLink}>
        <CardHeader
          action={<p className={style.date}>{date}</p>}
          title={user.nick}
        />
      </Link>
      <p className={style.about}>{comment}</p>
    </div>
  );
};

const Post = ({
  id,
  image,
  date,
  description,
  location,
  user,
  likes,
  tags,
  comments,
}) => {
  return (
    <div className={style.post}>
      <img src={image} className={style.bg} alt="" />
      <div className={style.info}>
        <Link to={`/profile/${user.nick}`} className={style.userLink}>
          <CardHeader
            action={<p className={style.date}>{date}</p>}
            title={user.nick}
            subheader={location}
          />
        </Link>
        <p className={style.about}>{description}</p>
        <div className={style.tags}>
          {tags.map((tag) => (
            <Link to={`/search?tag=${tag}`} className={style.tag}>
              #{tag}
            </Link>
          ))}
        </div>
        <div className={style.controls}>
          <IconButton>
            {likes.isLiked ? (
              <Favorite sx={{ color: "red" }} />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
          <p>{likes.count}</p>
          <Link to={`/edit/${id}`}>
            <IconButton>
              <Edit />
            </IconButton>
          </Link>
        </div>
        <div className={style.comments}>
          {comments.map((comment) => (
            <Comment {...comment} />
          ))}
        </div>
        <LeaveComment />
      </div>
    </div>
  );
};

export default Post;
