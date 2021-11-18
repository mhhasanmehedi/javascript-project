import React from "react";
import { useParams } from "react-router";
import PostData from "../../PostData.json";
import { Helmet } from "react-helmet";
import "./Posts.scss";
import { Link } from "react-router-dom";

const Posts = () => {
  const { postId } = useParams();
  let posts = PostData.filter((x) => x.id === Number(postId));

  return (
    <>
      <Helmet>
        <title>Post || {posts[0].title}</title>
      </Helmet>
      <div>
        <div className="single-post">
          <h3>{posts[0].title}</h3>
          <img width="100%" height="400px" src={posts[0].img} alt="" />
          <p>{posts[0].title}</p>
          <p>
            Link Link: <a href={posts[0].live}>{posts[0].live}</a>
          </p>
          <p>
            Github Link: <a href={posts[0].github}>{posts[0].github}</a>
          </p>
          <Link to="/home" className="btn">
            <button type="button">Go home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Posts;
