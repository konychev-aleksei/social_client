import { useState } from "react";
import { TextField, Button, Autocomplete } from "@mui/material";
import { Done, Clear } from "@mui/icons-material";
import style from "./style.module.scss";
import categories from "../../constants/categories";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
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

const Form = ({ isCreation }) => {
  const { id } = useParams();
  const [fileUrl, setFileUrl] = useState("/image_placeholder.png");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [create] = useCreateMutation();
  const [updateById] = useUpdateByIdMutation();

  const handleChangeImage = async (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);

    setFileUrl(url);
  };

  const onSubmit = async (data) => {
    const { location, description, tags, image } = data;

    const formData = new FormData();

    formData.append("location", location);
    formData.append("description", description);
    formData.append("tags", tags);
    formData.append("image", image[0]);

    if (isCreation) {
      create(formData);
    } else {
      updateById(id, formData);
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
            required: true,
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
        {...register("description", requiredMax(200))}
        error={Boolean(errors.description)}
        helperText={errors.description?.message}
      />
      <Autocomplete
        multiple
        options={categories}
        getOptionLabel={(option) => option.name}
        defaultValue={[]}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} label="Теги" />}
        onChange={(_, tags) => {
          setValue("tags", tags);
        }}
      />
      <Button variant="contained" startIcon={<Done />} type="submit">
        Опубликовать
      </Button>
      <Button variant="contained" startIcon={<Clear />}>
        Удалить
      </Button>
    </form>
  );
};

export default Form;
