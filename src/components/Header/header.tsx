import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RiMenuFoldLine, RiMenuUnfoldLine } from 'react-icons/ri';
import { ModalTypeEnum } from '../../constants';
import { UseAccount, UseCheckSize, UseModal } from '../../hooks';
import './header.scss';
import { Login } from './login';
import { ProfileUser } from './profile-user';
import Search from './search';
export interface HeaderProps {
  dropdownMenu: boolean;
  setDropdownMenu: (value: boolean) => void;
}

const Header = (props: HeaderProps) => {
  const { t, i18n } = useTranslation();
  const { toggle } = UseModal();
  const { resultAccount } = UseAccount();
  const { handleGetProfile } = UseAccount();
  const { dropdownMenu, setDropdownMenu } = props;
  const { accessToken } = resultAccount;

  useEffect(() => {
    handleGetProfile();
  }, [handleGetProfile]);

  const { width } = UseCheckSize();
  useEffect(() => {
    if (width < 768) {
      setDropdownMenu(false);
    }
  }, [width, setDropdownMenu]);

  const IconDropdownMenu = dropdownMenu
    ? RiMenuFoldLine
    : RiMenuUnfoldLine;

  return (
    <div className={clsx('header', dropdownMenu && 'header-active')}>
      <div
        className="header-toggle"
        onClick={() => setDropdownMenu(!dropdownMenu)}
      >
        <IconDropdownMenu />
      </div>
      <div className="header-search">
        {/* <input type="text" placeholder={t('search-input')} />
        <div className='search-result'></div> */}
        <Search/>
      </div>
      <div className="header-user">
        <div className="heder-i18n">
          <div className="switch">
            <input
              id="language-toggle"
              className="check-toggle check-toggle-round-flat"
              type="checkbox"
              defaultChecked={false}
              onChange={(event) => {
                const { checked } = event.target;
                if (checked) {
                  i18n.changeLanguage('en');
                } else {
                  i18n.changeLanguage('vn');
                }
              }}
            />
            <label htmlFor="language-toggle"></label>
            <span className="on">VN</span>
            <span className="off">EN</span>
          </div>
        </div>
        {accessToken ? <ProfileUser /> : <Login />}
      </div>
    </div>
  );
};

export default Header;
