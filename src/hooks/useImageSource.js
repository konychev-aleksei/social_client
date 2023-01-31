import { baseQuery } from "../constants/constants";

const useImageSource = (id, isNew) =>
  isNew ? "/image_placeholder.png" : `${baseQuery}/image/${id}.png`;

export default useImageSource;
