import React, { useEffect } from 'react';
import { UseModal, UseMusic } from '../hooks';
import YouTube from "react-youtube";
var getYouTubeID = require("get-youtube-id");

const ModalVideo = () => {
  const { resultModal } = UseModal();
  const { handleOnPauseMusic, playing } = UseMusic();
  const { link_mv } = resultModal;

  useEffect(() => {
    if (playing) {
      handleOnPauseMusic(false);
    }
  }, [playing]);
  const opts = {
    width: "80%",
    heigth:'60vh',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    }
  };
  return (
    <div className="modal-video">
      {/* <iframe
        className="responsive-iframe"
        src={`https://www.youtube.com/embed/${link_mv.split('/')[3]}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      /> */}
      <YouTube videoId={getYouTubeID(link_mv)} opts={opts}  />
    </div>
  );
};

export default ModalVideo;
