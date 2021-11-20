import Post from "../../Components/Post/Post";
import { Helmet } from "react-helmet";
import "./Home.scss";
import { useContext } from "react";
import { PostContext } from "../../App";

const Home = () => {
  const [posts] = useContext(PostContext);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <div className="container">
        <h2>Javascript Project</h2>
        <div className="post">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
