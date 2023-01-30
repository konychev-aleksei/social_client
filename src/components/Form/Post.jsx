import { Button, Chip } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import style from "./style.module.scss";

const sx = {
  color: "black",
};

const Post = ({ post, setEditing }) => {
  const { id, author_nick, description, tags, likes_count, created_on } = post;

  const imageSource = "http://localhost:5005/image/" + id + ".png";

  return (
    <div className={style.form}>
      <div className={style.author}>
        <b>{author_nick}</b>
        <Button sx={sx} startIcon={<FavoriteBorder />}>
          {likes_count}
        </Button>
      </div>
      <img className={style.image} src={imageSource} alt="" />
      <div className={style.controls}>
        <button onClick={() => setEditing(true)}>Редактировать</button>
        <button>Удалить</button>
      </div>
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
