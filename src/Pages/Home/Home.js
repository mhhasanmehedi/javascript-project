import React from 'react';
import Post from '../../Components/Post/Post';
import PostData from '../../PostData.json';
import { Helmet } from 'react-helmet';
import './Home.scss';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <div className='container'>
        <h2>Javascirpt Project</h2>
        <div className='post'>
          {PostData.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
