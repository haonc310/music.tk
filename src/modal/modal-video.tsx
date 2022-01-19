import React, { useEffect } from 'react';
import { UseModal, UseMusic } from '../hooks';

const ModalVideo = () => {
  const { resultModal } = UseModal();
  const { handleOnPauseMusic, playing } = UseMusic();
  const { link_mv } = resultModal;

  useEffect(() => {
    if (playing) {
      handleOnPauseMusic(false);
    }
  }, [playing]);
  return (
    <div className="modal-video">
      <iframe
        className="responsive-iframe"
        src={`https://www.youtube.com/embed/${link_mv}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default ModalVideo;
