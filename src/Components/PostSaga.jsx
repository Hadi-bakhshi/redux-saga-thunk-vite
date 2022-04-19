import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../redux/posts/postAction";

const PostSaga = () => {
  const [postId, setPostId] = useState("");
  const { loading, error, data } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux-saga middleware</h1>
      <input
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={() => dispatch(fetchPostRequest(postId || 1))}>
        Get post
      </button>
      {loading ? (
        <p>Loading... </p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data.title ? (
        <div>
          <p>Post Title : {data.title}</p>
          <p>Post Body : {data.body} </p>
        </div>
      ) : (
        <p>fetch some post</p>
      )}
    </>
  );
};

export default PostSaga;
