import React from 'react';
import Menu from './menu';
import { SiApachekafka } from 'react-icons/si';
import './sidebar.scss';
import clsx from 'clsx';

export interface SidebarProps {
  dropdownMenu: boolean;
  setDropdownMenu: (value: boolean) => void;
}

const Sidebar = (props: SidebarProps) => {
  const { dropdownMenu } = props;

  return (
    <div
      className={clsx('sidebar', dropdownMenu && 'sidebar-active')}
    >
      <div className="sidebar-heading">
        <div className="sidebar-logo">
          <SiApachekafka />
          <span className="special">Bee</span>
          <span>music</span>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Sidebar;
