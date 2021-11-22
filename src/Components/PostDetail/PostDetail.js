import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import './PostDetail.scss';
import { Link } from 'react-router-dom';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const { title, imgURL, liveLink, githubLink } = post;

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);
  const shareUrl = `https://react-routing12.netlify.app/`;
  return (
    <>
      <Helmet>
        <title>Post || </title>
      </Helmet>

      <div>
        <div className='single-post'>
          <h3>{title}</h3>
          <img width='100%' height='400px' src={imgURL} alt='' />
          <p>{title}</p>
          <br />
          <p>
            Link Link: <a href={liveLink}>{liveLink}</a>
          </p>
          <br />
          <p>
            Github Link: <a href={githubLink}>{githubLink}</a>
          </p>
          <br />

          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={40} />
          </FacebookShareButton>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={40} />
          </LinkedinShareButton>

          <Link to='/home' className='btn'>
            <button type='button'>Go home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
