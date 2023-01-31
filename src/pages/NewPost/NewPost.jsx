import style from "./style.module.scss";
import Form from "../../components/Form/Form";

const defaultPost = {
  description: "",
  image: null,
  tags: [],
};

const NewPostPage = () => {
  return (
    <div className={style.wrapper}>
      <Form isNew post={defaultPost} />
    </div>
  );
};

export default NewPostPage;
