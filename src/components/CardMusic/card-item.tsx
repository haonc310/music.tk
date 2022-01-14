import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiEyeLine } from 'react-icons/ri';
import { AiFillHeart, AiOutlinePlayCircle } from 'react-icons/ai';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import './style.scss';

const CardItem = ({ music }: any) => {
  const formatView = new Intl.NumberFormat('vn');
  return (
    <div className="card">
      <div className="card-image">
        <img src={music.image_music} alt="" />
        <div className="overlay">
          <div className=" cursor-pointer overlay-like">
            <AiFillHeart />
          </div>
          <div className=" cursor-pointer overlay-play">
            <AiOutlinePlayCircle />
          </div>
          <div className=" cursor-pointer overlay-play">
            <HiOutlineDotsHorizontal />
          </div>
        </div>
      </div>
      <div className="card-info">
        <h4 className="card-name">{music.name_music}</h4>
        <p className="card-author">{music.subscribe}</p>
        <p className="card-view">
          <RiEyeLine />
          <span>
            {music.view && formatView.format(music.view)} lượt xem
          </span>
        </p>
        <p className="card-like">
          <MdFavoriteBorder />
          <span>
            {music.favorite && formatView.format(music.favorite)} lượt
            thích
          </span>
        </p>
      </div>
      <div className="card-timer">
        <span>{music.time_format}</span>
      </div>
    </div>
  );
};

export default CardItem;
