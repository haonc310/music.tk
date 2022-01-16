import clsx from 'clsx';
import React from 'react';
import { SiApachekafka } from 'react-icons/si';
import Menu from './menu';
import './sidebar.scss';

export interface SidebarProps {
  dropdownMenu: boolean;
  setDropdownMenu: (value: boolean) => void;
}

const Sidebar = (props: SidebarProps) => {
  const { dropdownMenu } = props;

  return (
    <div
      className={clsx(
        'sidebar',
        dropdownMenu ? 'sidebar-active' : 'sidebar-hidden'
      )}
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
