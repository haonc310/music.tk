import clsx from 'clsx';
import React, { useEffect } from 'react';
import { SiApachekafka } from 'react-icons/si';
import { UseToggle } from '../../hooks';
import Menu from './menu';
import './sidebar.scss';

export interface SidebarProps {
  dropdownMenu: boolean;
  setDropdownMenu: (value: boolean) => void;
}

const Sidebar = (props: SidebarProps) => {
  const { dropdownMenu } = props;
  let { handleToggleTheme, isDark } = UseToggle();
  let check = JSON.parse(localStorage.getItem('isDark') as string);
  useEffect(() => {
    let check = JSON.parse(localStorage.getItem('isDark') as string);
    handleToggleTheme(check);
  }, []);

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
      <div className="toggle">
        <input
          type="checkbox"
          checked={isDark}
          onChange={(event) => handleToggleTheme(!isDark)}
        />
      </div>
    </div>
  );
};

export default Sidebar;
