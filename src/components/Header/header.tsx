import React, { useState } from 'react';
import './header.scss';
import { RiMenuFoldLine, RiMenuUnfoldLine } from 'react-icons/ri';

export interface HeaderProps {
  dropdownMenu: boolean;
  setDropdownMenu: (value: boolean) => void;
}

const Header = (props: HeaderProps) => {
  const { dropdownMenu, setDropdownMenu } = props;

  const IconDropdownMenu = dropdownMenu
    ? RiMenuFoldLine
    : RiMenuUnfoldLine;
  return (
    <div className="header">
      <div
        className="header-toggle"
        onClick={() => setDropdownMenu(!dropdownMenu)}
      >
        <IconDropdownMenu />
      </div>
    </div>
  );
};

export default Header;
