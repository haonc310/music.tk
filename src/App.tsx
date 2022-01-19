import clsx from 'clsx';
import RouterControllers from './routes/router-controllers';
import SidebarRight from './components/sidebar-right/sidebar-right';
import { UseToggle } from './hooks';
import './i18n';
import MainLayout from './layouts/MainLayout';
import ModalComponent from './modal/modal-component';

function App() {
  let { isDark } = UseToggle();

  let check = JSON.parse(localStorage.getItem('isDark') as string);
  check = check !== null ? check : isDark;
  return (
    <div className={clsx('App', check && 'dark')}>
      <MainLayout>
        <RouterControllers />
      </MainLayout>

      <SidebarRight />
      <ModalComponent />
    </div>
  );
}

export default App;
