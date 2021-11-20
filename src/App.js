import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddPost from "./Components/AddPost/AddPost";
import Header from "./Components/Header/Header";
import Posts from "./Components/Posts/Posts";
import Home from "./Pages/Home/Home";
import NoMatch from "./Pages/NoMatch/NoMatch";

export const PostContext = createContext();

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <PostContext.Provider value={[posts, setPosts]}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/post/:postId">
            <Posts />
          </Route>
          <Route path="/addPost">
            <AddPost />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>
    </PostContext.Provider>
  );
};

export default App;
