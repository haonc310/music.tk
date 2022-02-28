import React from 'react';
import { AiFillHeart, AiOutlinePlayCircle } from 'react-icons/ai';
import { CgPlayPauseO } from 'react-icons/cg';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiEyeLine } from 'react-icons/ri';
import {
  UseAccount,
  UseFavoriteAccount,
  UseMusic,
} from '../../hooks';
import { NeedLogin } from '../../layouts/login';
import OtherDots from '../other-dots/other-dots';
import './style.scss';

const CardItem = ({ music, data, index, _id }: any) => {
  const { resultAccount } = UseAccount();
  const { accessToken } = resultAccount;
  const formatView = new Intl.NumberFormat('vn');
  const tempData = { data, index, _id };
                  
  const { handleCreateFavorite } = UseFavoriteAccount();
  const {
    handlePausePlayClick,
    handleOnIndexMusic,
    playing,
    _id_music,
  } = UseMusic();

  return (
    <div className="card keen-slider__slide">
      <div className="card-image">
        <img src={music.image_music} alt="" />
        <div className="overlay">
          <div className=" cursor-pointer overlay-like">
            {/* <NeedLogin
              login={accessToken}
              icon={<AiFillHeart />}
              onClick={() => handleCreateFavorite({ idMusic: _id })}
            /> */}
          </div>
          <div className=" cursor-pointer overlay-play">
            {_id === _id_music ? (
              <>
                {playing ? (
                  <CgPlayPauseO onClick={handlePausePlayClick} />
                ) : (
                  <AiOutlinePlayCircle
                    onClick={handlePausePlayClick}
                  />
                )}
              </>
            ) : (
              <AiOutlinePlayCircle
                onClick={() => handleOnIndexMusic(tempData)}
              />
            )}
          </div>

          <div className=" cursor-pointer overlay-play">
            <OtherDots
              link_mv={music.link_mv}
              src_music={music.src_music}
              name_music={music.name_music}
            />
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
