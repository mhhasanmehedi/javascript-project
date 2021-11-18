import React from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';

const Post = ({ post }) => {
  return (
    <div className='post__item'>
      <Link to={`/post/${post.id}`}>
        <img width='100%' src={post.img} alt='' />
        <h4>{post.title}</h4>
      </Link>
    </div>
  );
};

export default Post;
