import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Posts from './Components/Posts/Posts';
import Home from './Pages/Home/Home';
import NoMatch from './Pages/NoMatch/NoMatch';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/post/:postId'>
            <Posts />
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
