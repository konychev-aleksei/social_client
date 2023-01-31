import { apiUrl } from "../constants/constants";

const useImageSource = (id) =>
  id ? `${apiUrl}/image/${id}.png` : "/image_placeholder.png";

export default useImageSource;
