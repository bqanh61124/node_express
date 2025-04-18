import React from "react";
import { Routes, Route } from "react-router-dom";
import PostLists from "./PostLists";
import PostDetail from "./PostDetail";

function Posts() {
  return (
    <Routes>
      <Route path="/" element={<PostLists />} />
      <Route path=":slug" element={<PostDetail />} />
    </Routes>
  );
}

export default Posts;
