import { TextField, Autocomplete } from "@mui/material";
import style from "./style.module.scss";
import categories from "../../constants/categories";
import usePostForm from "./usePostForm";

const Form = ({ post, isNew, setEditing }) => {
  const {
    imageUrl,
    handleChangeImage,
    register,
    setValue,
    errors,
    handleSubmit,
    onSubmit,
  } = usePostForm(post, isNew);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <label>
        <img className={style.image} src={imageUrl} alt="" />
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
        {...register("description", {
          required: {
            value: true,
            message: "Поле обязательно",
          },
          maxLength: {
            value: 200,
            message: `Максимальная длина - 200 символов`,
          },
        })}
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
