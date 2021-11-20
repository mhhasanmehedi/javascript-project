import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { Helmet } from "react-helmet";
import "./Posts.scss";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { PostContext } from "../../App";

const Posts = () => {
  const { postId } = useParams();
  // const [posts] = useContext(PostContext);
  // let post = posts.filter((x) => x._id === postId);
  // console.log(post[0].title);

  // const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${postId}`)
      // .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });

  // console.log(post);
  return (
    <>
      {/* <Helmet>
        <title>Post || {post[0].title}</title>
      </Helmet>
      <div>
        <div className="single-post">
          <h3>{post[0].title}</h3>
          <img width="100%" height="400px" src={post[0].imgURL} alt="" />
          <p>{post[0].title}</p>
          <br />
          <p>
            Link Link: <a href={post[0].liveLink}>{post[0].liveLink}</a>
          </p>
          <br />
          <p>
            Github Link: <a href={post[0].githubLink}>{post[0].githubLink}</a>
          </p>
          <br />
          <Link to="/home" className="btn">
            <button type="button">Go home</button>
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default Posts;
