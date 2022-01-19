import clsx from 'clsx';
import React, { useRef } from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import {
  CgPlayBackwards,
  CgPlayForwards,
  CgPlayPauseO,
} from 'react-icons/cg';
import { FaRandom } from 'react-icons/fa';
import { ImLoop } from 'react-icons/im';
import TimeSlider from 'react-input-slider';
import Duration from '../../components/Duration';
import { UseMusic } from '../../hooks';

export const CenterControl = () => {
  const [currentTime, setCurrentTime] = React.useState<number>(0);
  const [duration, setDuration] = React.useState<number>(0);
  const [loop, setLoop] = React.useState<boolean>(false);
  const [isRandom, setIsRandom] = React.useState<boolean>(false);

  const {
    playing,
    handleOnPauseMusic,
    resultMusic,
    handleOnAudio,
    handleOnNextPrevMusic,
    handleOnRandomMusic,
  } = UseMusic();
  const { audio, data, index } = resultMusic;
  const { src_music } = data;

  const audioRef = useRef<any>(null);

  const handleLoadedData = React.useCallback(() => {
    setDuration(audioRef.current.duration);
    handleOnAudio(audioRef.current);
  }, [setDuration, handleOnAudio]);

  const onTimeUpdate = React.useCallback(() => {
    setCurrentTime(audioRef.current.currentTime);

    if (audioRef.current.currentTime === audioRef.current.duration) {
      if (!loop && isRandom) {
        handleOnRandomMusic();
        return;
      }
      if (!loop) handleOnNextPrevMusic(index + 1);
    }
  }, [isRandom, loop, playing, index]);

  const handlePausePlayClick = React.useCallback(() => {
    handleOnPauseMusic(!playing);
  }, [audio, handleOnPauseMusic, playing]);
  const handleTimeSliderChange = React.useCallback(
    (position: any) => {
      const { x } = position;
      audioRef.current.currentTime = x;
      setCurrentTime(x);
      if (!playing) {
        audioRef.current.play();
        handleOnPauseMusic(true);
      }
    },
    [playing]
  );

  return (
    <>
      <audio
        loop={loop}
        hidden
        controls
        ref={audioRef}
        src={src_music}
        onLoadedData={handleLoadedData}
        onTimeUpdate={onTimeUpdate}
        autoPlay
      />
      <div className="center-control ">
        <div className="top">
          <ImLoop
            size="2.5rem"
            className={clsx(
              'control-action control-loop',
              loop && 'active'
            )}
            onClick={() => setLoop(!loop)}
          />
          <CgPlayBackwards
            size="2.5rem"
            className="control-action control-back"
            onClick={() => handleOnNextPrevMusic(index - 1)}
          />
          {playing ? (
            <CgPlayPauseO
              size="2.5rem"
              className="control-action control-play"
              onClick={handlePausePlayClick}
            />
          ) : (
            <AiOutlinePlayCircle
              size="2.5rem"
              className="control-action control-play"
              onClick={handlePausePlayClick}
            />
          )}
          <CgPlayForwards
            size="2.5rem"
            className="control-action control-next"
            onClick={() => handleOnNextPrevMusic(index + 1)}
          />
          <FaRandom
            size="2.5rem"
            className={clsx(
              'control-action control-loop',
              isRandom && 'active'
            )}
            onClick={() => setIsRandom(!isRandom)}
          />
        </div>
        <div className="bottom">
          <div className="time">
            <Duration seconds={currentTime} />
          </div>
          <div className="progress">
            <TimeSlider
              axis="x"
              xmax={duration}
              x={currentTime}
              onChange={handleTimeSliderChange}
              styles={{
                track: {
                  backgroundColor: '#e3e3e3',
                  height: '8px',
                  width: '100%',
                  borderRadius: '8px',
                },
                active: {
                  height: '8px',
                  width: '100%',
                  borderRadius: '8px',
                  background:
                    'linear-gradient(90deg,#008aff,#00ffe7)',
                },
                thumb: {
                  width: '13px',
                  height: '13px',
                  background:
                    'linear-gradient(90deg,#008aff,#00ffe7)',
                  borderRadius: '50%',
                },
              }}
            />
          </div>
          <div className="time">
            <Duration seconds={duration} />
          </div>
        </div>
      </div>
    </>
  );
};
