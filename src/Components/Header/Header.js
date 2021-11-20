import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className='header container'>
      <div className='logo'>
        <Link to='/'>
          JS<span>.</span>
        </Link>
      </div>
      <div className='main-menu'>
        <Link to='/home'>Home</Link>
        <Link to='/addPost'>Add Post</Link>
        <Link to='/allPost'>All Post</Link>
      </div>
    </div>
  );
};

export default Header;
