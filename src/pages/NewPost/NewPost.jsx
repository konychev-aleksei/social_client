import style from "./style.module.scss";
import Form from "../../components/Form/Form";
import { newPost } from "../../constants";

const NewPostPage = () => {
  return (
    <div className={style.wrapper}>
      <Form isNew post={newPost} />
    </div>
  );
};

export default NewPostPage;
