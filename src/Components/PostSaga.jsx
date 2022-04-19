import React from "react";
import { useState } from "react";

const PostSaga = () => {
  const [postId, setPostId] = useState("");

  return (
    <>
      <h1>Redux-saga middleware</h1>
      <input
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button>Get post</button>
    </>
  );
};

export default PostSaga;
