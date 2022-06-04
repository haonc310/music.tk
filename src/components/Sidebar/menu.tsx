import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import { homeMenu, musicMenu } from '../../constants';
import { UseAccount } from '../../hooks';
import { NeedLogin } from '../../layouts/login';

type Props = {
  setDropdownMenu: (value: boolean) => void;
}
const Menu = ({setDropdownMenu}: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { resultAccount } = UseAccount();
  const { accessToken } = resultAccount;

  const handlePushPage = (path: string) => {
    navigate(path);
  };

  return (
    <div className="menu">
      <div className="menu-list">
        {homeMenu.map((item, index) => (
          <NeedLogin
            key={index}
            item={item}
            setDropdownMenu={setDropdownMenu}
            login={item.href === '/' ? false : !accessToken}
            onClick={() =>{
              handlePushPage(item.href)
             console.log("Hi")
            }}
          />
        ))}
      </div>
      <div className="menu-list">
        <p className="menu-title">{t('music-title')}</p>
        {musicMenu.map((item, index) => (
          <NeedLogin
            key={index}
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
