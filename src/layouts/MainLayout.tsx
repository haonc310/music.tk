import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Header from '../components/Header/header';
import Sidebar from '../components/Sidebar/sidebar';
import { MusicControl } from '../components/music-control';
import { UseToggle } from '../hooks';
import { useLocation, useNavigate } from 'react-router-dom';

const MainLayout = ({ children }: any) => {
  const location = useLocation();

  console.log(location)
  const [dropdownMenu, setDropdownMenu] = useState(true);

  let { handleToggleTheme, isDark } = UseToggle();
  let check = JSON.parse(localStorage.getItem('isDark') as string);
  useEffect(() => {
    let check = JSON.parse(localStorage.getItem('isDark') as string);
    handleToggleTheme(check);
  }, []);
  useEffect(() => {
    setDropdownMenu(false)
  },[location.pathname])
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
        <div className="toggle">
        <input
          type="checkbox"
          checked={isDark}
          onChange={(event) => handleToggleTheme(!isDark)}
        />
      </div>
      </div>
    </>
  );
};

export default MainLayout;
