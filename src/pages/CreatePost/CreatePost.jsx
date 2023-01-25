import style from "./style.module.scss";

import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";

const CreatePost = () => {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Form />
      </div>
    </>
  );
};

export default CreatePost;
