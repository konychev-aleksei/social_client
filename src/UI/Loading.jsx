import { CircularProgress } from "@mui/material";
import style from "./style.module.scss";

const Loading = () => (
  <div className={style.centered}>
    <CircularProgress />
  </div>
);

export default Loading;
