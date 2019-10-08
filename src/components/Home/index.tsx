import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const Home = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Link to={'/examples/io'}>intersection observer</Link>
  </header>
);

export default Home;
