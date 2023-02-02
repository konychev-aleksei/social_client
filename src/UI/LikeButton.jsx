import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Button } from "@mui/material";

const LikeButton = ({ onClick, disabled, isLiked, count }) => (
  <Button
    onClick={onClick}
    disabled={disabled}
    sx={{ color: "black" }}
    startIcon={
      isLiked ? <Favorite sx={{ color: "red" }} /> : <FavoriteBorder />
    }
  >
    {count}
  </Button>
);

export default LikeButton;
