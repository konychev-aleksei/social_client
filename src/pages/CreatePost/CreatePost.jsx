import style from "./style.module.scss";

import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";

const CreatePost = ({ isCreation }) => {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Form isCreation={isCreation} />
      </div>
    </>
  );
};

export default CreatePost;
