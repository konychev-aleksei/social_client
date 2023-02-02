import { apiUrl } from "../constants";

const useImageSource = (id) =>
  id ? `${apiUrl}/image/${id}.png` : "/image_placeholder.png";

export default useImageSource;
