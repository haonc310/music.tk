import React from 'react';
import Banner from './components/banner';
import Favorite from './components/favorite';
import NewMusic from './components/new-music';
import Trending from './components/trending';

const Home = () => {
  return (
    <div>
      <Banner />
      <Trending />
      <NewMusic />
      <Favorite />
    </div>
  );
};

export default Home;
