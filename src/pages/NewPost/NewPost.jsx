import style from "./style.module.scss";
import Form from "../../components/Form/Form";

const defaultPost = {
  description: "",
  image: null,
  tags: [],
};

const NewPost = () => {
  return (
    <div className={style.wrapper}>
      <Form isNew post={defaultPost} />
    </div>
  );
};

export default NewPost;
