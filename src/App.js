import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddPost from './Components/AddPost/AddPost';
import AllPost from './Components/AllPost/AllPost';
import Header from './Components/Header/Header';
import PostDetail from './Components/PostDetail/PostDetail';
import Home from './Pages/Home/Home';
import NoMatch from './Pages/NoMatch/NoMatch';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/post/:postId'>
            <PostDetail />
          </Route>
          <Route path='/addPost'>
            <AddPost />
          </Route>
          <Route path='/allPost'>
            <AllPost />
          </Route>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
