import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Favorite from '../pages/Favorite';
import HomePage from '../pages/Home';
import Listened from '../pages/Listened';
import { UseAccount, UseMusic, UsePlaylist } from '../hooks';
import ApiPlayHistory from '../apis/api-play-history';

const RouterControllers = () => {
  const accessTokenLocal = localStorage.accessToken;
  const navigate = useNavigate();
  const { resultAccount } = UseAccount();
  const { accessToken } = resultAccount;
  const { resultMusic } = UseMusic();
  const { _id_music } = resultMusic;
  const { getPlaylistAPI } = UsePlaylist();

  useEffect(() => {
    console.log({ accessToken, accessTokenLocal });
    if (!accessToken && !accessTokenLocal) navigate('/');
    if (accessToken && accessTokenLocal) {
      getPlaylistAPI({});
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    (async () => {
      if (_id_music && accessToken) {
        const res = await ApiPlayHistory.postPlayHistory({ idMusic: _id_music });
        console.log(res);
      }
    })();
  }, [_id_music]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/listened-song" element={<Listened />} />
    </Routes>
  );
};

export default RouterControllers;
