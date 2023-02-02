import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home";
import NewPostPage from "./pages/NewPost";
import PostPage from "./pages/Post";

import Header from "./components/Header/Header";
import useAuth from "./hooks/useAuth";

import "./style.module.scss";

const App = () => {
  useAuth();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/post">
          <Route path=":id" element={<PostPage />} />
          <Route path="create" element={<NewPostPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
