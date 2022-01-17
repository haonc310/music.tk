import clsx from 'clsx';
import React from 'react';
import { UsePlaylist } from '../../hooks';
import WaitingList from '../waitinglist/waiting-list';
import './sidebar-right.scss';

const SidebarRight = () => {
  const { resultPlaylist, handleToggle } = UsePlaylist();
  const { isOpen } = resultPlaylist;

  return (
    <>
      <div className="wrapper-sidebar-right">
        <div
          className={clsx('modal-overlay', !isOpen && 'hidden')}
          onClick={() => handleToggle(false)}
        ></div>
        <div className={clsx('sidebar-right', isOpen && 'active')}>
          <div className="sidebar-right-content">
            <WaitingList />
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarRight;
