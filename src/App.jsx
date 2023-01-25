import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import style from "./style.module.scss";

import Feed from "./pages/Feed/Feed";

import PostPage from "./pages/Post/Post";
import CreatePost from "./pages/CreatePost/CreatePost";
import ProfilePage from "./pages/Profile/Profile";
import useAuth from "./hooks/useAuth";

const App = () => {
  useAuth();

  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <Routes>
          <Route path="/search" element={<Feed />} />
          <Route path="/tag" element={<Feed />} />
          <Route path="/post">
            <Route path=":id" element={<PostPage />} />
            <Route path="create" element={<CreatePost />} />
          </Route>
          <Route path="/profile/:userName" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/search" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
