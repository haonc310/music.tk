import clsx from 'clsx';
import { useState } from 'react';
import Header from '../components/Header/header';
import Sidebar from '../components/Sidebar/sidebar';
import { MusicControl } from '../components/music-control';

const MainLayout = ({ children }: any) => {
  const [dropdownMenu, setDropdownMenu] = useState(true);
  return (
    <>
      <Sidebar
        dropdownMenu={dropdownMenu}
        setDropdownMenu={setDropdownMenu}
      />
      <div className={clsx('main', dropdownMenu && 'main-active')}>
        <div className="content">
          <Header
            dropdownMenu={dropdownMenu}
            setDropdownMenu={setDropdownMenu}
          />
          {children}
          <MusicControl dropdownMenu={dropdownMenu} />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
