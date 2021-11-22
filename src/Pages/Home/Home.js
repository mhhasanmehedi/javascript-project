import Post from '../../Components/Post/Post';
import { Helmet } from 'react-helmet';
import './Home.scss';
import { useEffect, useState } from 'react';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://pure-journey-77314.herokuapp.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <div className='container'>
        <h2>Javascript Project</h2>
        <div className='post'>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
