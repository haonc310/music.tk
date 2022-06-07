import clsx from 'clsx';
import React, { useEffect } from 'react';
import { SiApachekafka } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { UseToggle } from '../../hooks';
import Menu from './menu';
import PlayList from './play-list';
import './sidebar.scss';

export interface SidebarProps {
  dropdownMenu: boolean;
  setDropdownMenu: (value: boolean) => void;
}

const Sidebar = (props: SidebarProps) => {
  const { dropdownMenu, setDropdownMenu } = props;
  

  return (
    <div
      className={clsx(
        'sidebar',
        dropdownMenu ? 'sidebar-active' : 'sidebar-hidden'
      )}
    >
      <div className="sidebar-heading">
        <Link to="/" className="sidebar-logo">
          <SiApachekafka />
          <span className="special">Bee</span>
          <span className="primary">music</span>
        </Link>
      </div>
      <Menu setDropdownMenu={setDropdownMenu}/>
      <PlayList/>
    </div>
  );
};

export default Sidebar;
