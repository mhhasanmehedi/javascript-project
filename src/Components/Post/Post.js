import React from "react";
import { Link } from "react-router-dom";
import "./Post.scss";

const Post = ({ post }) => {
  const { _id, imgURL, title } = post;
  return (
    <div className="post__item">
      <Link to={`/post/${_id}`}>
        <img width="100%" src={imgURL} alt={title} />
        <h4>{title}</h4>
      </Link>
    </div>
  );
};

export default Post;
