import { useState } from "react";
import { TextField, Button, Autocomplete } from "@mui/material";
import { Done, Clear } from "@mui/icons-material";
import style from "./style.module.scss";

import tagsList from "../../constants/tags";
import { useForm } from "react-hook-form";

const Form = () => {
  const [fileUrl, setFileUrl] = useState(
    "https://www.accbc.org/wp-content/themes/customizr-pro/assets/front/img/slide-placeholder.png"
  );
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleChangeFile = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setFileUrl(url);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <label>
        <img
          className={style.image}
          src={fileUrl}
          alt=""
        />
        <input
          type="file"
          {...register("file", { required: true })}
          hidden
          onChange={handleChangeFile}
        />
        {errors.file && (
          <p className={style.error}>Необходимо приложить файл</p>
        )}
      </label>
      <TextField
        size="small"
        label="Местоположение"
        {...register("location", {
          required: {
            value: true,
            message: "Поле обязательно",
          },
          maxLength: {
            value: 10,
            message: "Максимальная длина - 10 символов",
          },
        })}
        error={Boolean(errors.location)}
        helperText={errors.location?.message}
      />
      <TextField
        size="small"
        label="Описание"
        multiline
        {...register("description", {
          required: {
            value: true,
            message: "Поле обязательно",
          },
          maxLength: {
            value: 200,
            message: "Максимальная длина - 200 символов",
          },
        })}
        error={Boolean(errors.description)}
        helperText={errors.description?.message}
      />
      <Autocomplete
        multiple
        options={tagsList}
        getOptionLabel={(option) => option.title}
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
