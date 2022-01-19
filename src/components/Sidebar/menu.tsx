import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import { homeMenu, musicMenu } from '../../constants';
import { NeedLogin } from '../../layouts/login';

const Menu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handlePushPage = (path: string) => {
    navigate(path);
  };

  const accessToken = false;

  return (
    <div className="menu">
      <div className="menu-list">
        {homeMenu.map((item, index) => (
          <NeedLogin
            item={item}
            login={item.href === '/' ? false : !accessToken}
            onClick={() => handlePushPage(item.href)}
          />
        ))}
      </div>
      <div className="menu-list">
        <p className="menu-title">{t('music-title')}</p>
        {musicMenu.map((item, index) => (
          <NeedLogin
            item={item}
            login={item.href === '/' ? false : !accessToken}
            onClick={() => handlePushPage(item.href)}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
