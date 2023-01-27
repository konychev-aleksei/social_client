import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Feed from "./pages/Feed/Feed";

import PostPage from "./pages/Post/Post";
import CreatePost from "./pages/CreatePost/CreatePost";
import useAuth from "./hooks/useAuth";

const App = () => {
  useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Feed />} />
        <Route path="/post">
          <Route path=":id" element={<PostPage />} />
          <Route path="create" element={<CreatePost isCreation />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
