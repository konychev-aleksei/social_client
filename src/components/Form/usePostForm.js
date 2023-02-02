import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useCreateMutation,
  useUpdateByIdMutation,
} from "../../app/reducers/postApi";
import useImageSource from "../../hooks/useImageSource";
import { ERROR } from "../../constants";
import { useNavigate } from "react-router-dom";

const usePostForm = (post, isNew, setEditing) => {
  const { id } = post;

  const navigate = useNavigate();
  const defaultImageUrl = useImageSource(id);

  const [imageUrl, setImageUrl] = useState(defaultImageUrl);
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

    setImageUrl(url);
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
      const { error } = await create(formData);

      if (error) {
        alert(ERROR);
        return;
      }

      navigate("/home");
    } else {
      const { error } = await updateById({ id, post: formData });

      if (error) {
        alert(ERROR);
        return;
      }

      setEditing(false);
    }
  };

  return {
    imageUrl,
    handleChangeImage,
    register,
    setValue,
    errors,
    handleSubmit,
    onSubmit,
  };
};

export default usePostForm;
