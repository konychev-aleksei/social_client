import { useLocation } from "react-router-dom";

const useTag = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const tag = params.get("tag");

  return tag || "";
};

export default useTag;
