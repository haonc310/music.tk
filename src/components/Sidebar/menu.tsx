import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { homeMenu, musicMenu } from '../../constants';

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div className="menu">
      <div className="menu-list">
        {homeMenu.map((item, index) => (
          <NavLink
            to={item.href}
            key={index}
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' activated' : '')
            }
          >
            {<item.Icon />}
            <span>{t(`menu.${item.title}`)}</span>
          </NavLink>
        ))}
      </div>
      <div className="menu-list">
        <p className="menu-title">{t('music-title')}</p>
        {musicMenu.map((item, index) => (
          <NavLink
            to={item.href}
            key={index}
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' activated' : '')
            }
          >
            {<item.Icon />}
            <span>{t(`menu.${item.title}`)}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Menu;
