import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ModalTypeEnum } from '../../constants';
import { UseModal } from '../../hooks';

export const NeedLogin = (props: any) => {
  const { t } = useTranslation();
  const { toggle } = UseModal();
  const { item, login, onClick,setDropdownMenu } = props;
  const handleClick = (e: any) => {
    e.preventDefault();
    toggle({
      type: ModalTypeEnum.LOGIN,
    });
  };
  return (
    <div>
      {!login ? (
        <NavLink
          onClick={(event) => {
            if (item.href) {
              // setDropdownMenu(false)
            } else {
              event.preventDefault();
              onClick();
            }
          }}
          to={item.href}
          className={({ isActive }) =>
            'nav-link' + (isActive ? ' activated' : '')
          }
          style={{ fontSize: '2rem' }}
        >
          {<item.Icon />}
          <span>{t(`menu.${item.title}`)}</span>
        </NavLink>
      ) : (
        <div>
          <NavLink to="/aaa" onClick={handleClick}>
            {<item.Icon />}
            <span>{t(`menu.${item.title}`)}</span>
          </NavLink>
        </div>
      )}
    </div>
  );
};
