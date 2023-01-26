import style from "./style.module.scss";
import { CardHeader, IconButton, TextField, Button, Chip } from "@mui/material";
import { Favorite, FavoriteBorder, Edit } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGetByIdQuery } from "../../app/reducers/postApi";
import categories, { categoriesList } from "../../constants/categories";
import { requiredMax } from "../Form/Form";

const LeaveComment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.leaveComment}>
      <TextField
        {...register("comment", requiredMax(100))}
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

const Post = () => {
  const { id } = useParams();
  const { data: post, error, isLoading, refetch } = useGetByIdQuery(id);

  if (isLoading) {
    return null;
  }

  const {
    location,
    description,
    author_nick,
    tags,
    created_on,
    is_liked,
    likes_count,
  } = post;

  const profileLink = (
    <Link to={`/profile/${author_nick}`} className={style.userLink}>
      <CardHeader
        action={<p className={style.date}>{created_on}</p>}
        title={author_nick}
        subheader={location}
      />
    </Link>
  );

  const postDescription = (
    <>
      <p className={style.about}>{description}</p>
      <div className={style.tags}>
        {tags.map((tag) => (
          <Link to={`/search?tag=${tag}`} className={style.tag}>
            <Chip label={categoriesList[tag]} />
          </Link>
        ))}
      </div>
    </>
  );

  const controls = (
    <div className={style.controls}>
      <IconButton>
        {is_liked ? <Favorite sx={{ color: "red" }} /> : <FavoriteBorder />}
      </IconButton>
      <p>{likes_count}</p>
      <Link to={`/edit/${id}`}>
        <IconButton>
          <Edit />
        </IconButton>
      </Link>
    </div>
  );

  const commentsSection = (
    <>
      <div className={style.comments}>
        {[].map((comment) => (
          <Comment {...comment} />
        ))}
      </div>
      <LeaveComment />
    </>
  );

  return (
    <div className={style.post}>
      <img
        src={`http://localhost:5005/image/${id}.png`}
        className={style.bg}
        alt=""
      />
      <div className={style.info}>
        {profileLink}
        {postDescription}
        {controls}
        {commentsSection}
      </div>
    </div>
  );
};

export default Post;
