import React from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';

const Post = ({ post }) => {
  const { _id, imgURL, title } = post;
  return (
    <div className='post__item'>
      <Link to={`/post/${_id}`}>
        <div className='img-box'>
          <img src={imgURL} alt={title} />
        </div>
        <p
          style={{ backgroundColor: 'white', width: '100%', height: '3px' }}
        ></p>
        <h4>{title}</h4>
      </Link>
    </div>
  );
};

export default Post;
