import { useState } from "react";
import { TextField, Autocomplete } from "@mui/material";
import style from "./style.module.scss";
import categories from "../../constants/categories";
import { useForm } from "react-hook-form";
import {
  useCreateMutation,
  useUpdateByIdMutation,
} from "../../app/reducers/postApi";

export const requiredMax = (maxLength) => ({
  required: {
    value: true,
    message: "Поле обязательно",
  },
  maxLength: {
    value: maxLength,
    message: `Максимальная длина - ${maxLength} символов`,
  },
});

const Form = ({ post, isNew, setEditing }) => {
  const { id, description, tags } = post;

  const imageSource = "http://localhost:5005/image/" + id + ".png";

  const [fileUrl, setFileUrl] = useState(
    isNew ? "/image_placeholder.png" : imageSource
  );
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: post,
  });

  const [create] = useCreateMutation();
  const [updateById] = useUpdateByIdMutation();

  const handleChangeImage = async (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);

    setFileUrl(url);
  };

  const onSubmit = async (data) => {
    const { description, tags, image } = data;

    const formData = new FormData();

    formData.append("description", description);

    tags.forEach((tag) => {
      formData.append("tags[]", tag.tag);
    });

    if (isNew || image.length) {
      formData.append("image", image[0]);
    }

    if (isNew) {
      create(formData);
    } else {
      updateById({ id, post: formData });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <label>
        <img className={style.image} src={fileUrl} alt="" />
        <input
          type="file"
          accept="image/*"
          name="image"
          {...register("image", {
            required: isNew,
            onChange: handleChangeImage,
          })}
          hidden
        />
        {Boolean(errors.image) && (
          <p className={style.error}>Необходимо приложить файл</p>
        )}
      </label>
      <TextField
        size="small"
        label="Описание"
        multiline
        defaultValue={description}
        {...register("description", requiredMax(200))}
        error={Boolean(errors.description)}
        helperText={errors.description?.message}
      />
      <Autocomplete
        multiple
        options={categories}
        getOptionLabel={(option) => option.name}
        defaultValue={tags}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} label="Теги" />}
        onChange={(_, tags) => {
          setValue("tags", tags);
        }}
      />
      <div className={style.controls}>
        <button type="submit">Сохранить</button>
        {!isNew && <button onClick={() => setEditing(false)}>Отменить</button>}
      </div>
    </form>
  );
};

export default Form;
