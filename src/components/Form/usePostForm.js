import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useCreateMutation,
  useUpdateByIdMutation,
} from "../../app/reducers/postApi";

const usePostForm = ({ post, isNew }) => {
  const imageSource = "http://localhost:5005/image/" + post.id + ".png";

  const [imageUrl, setImageUrl] = useState(
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
      create(formData);
    } else {
      updateById({ id, post: formData });
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
