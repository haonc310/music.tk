import React from 'react';
import { NavLink } from 'react-router-dom';
import { homeMenu, musicMenu } from '../../constants';
const Menu = () => {
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
            <span>{item.title}</span>
          </NavLink>
        ))}
      </div>
      <div className="menu-list">
        <p className="menu-title">Âm nhạc</p>
        {musicMenu.map((item, index) => (
          <NavLink
            to={item.href}
            key={index}
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' activated' : '')
            }
          >
            {<item.Icon />}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Menu;
