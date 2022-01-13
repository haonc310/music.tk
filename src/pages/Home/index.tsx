import React from 'react';
import Favorite from './components/favorite';
import Trending from './components/trending';
import Banner from './components/banner';

const Home = () => {
  return (
    <div>
      <Banner />
      <Trending />
      <Favorite />
    </div>
  );
};

export default Home;
