import clsx from 'clsx';
import RouterControllers from '../src/routes/router-controllers';
import SidebarRight from './components/sidebar-right/sidebar-right';
import { UseToggle } from './hooks';
import MainLayout from './layouts/MainLayout';
import ModalComponent from './modal/modal-component';

function App() {
  const { isDark } = UseToggle();
  return (
    <div className={clsx('App', isDark && 'dark')}>
      <MainLayout>
        <RouterControllers />
      </MainLayout>
      <SidebarRight />
      <ModalComponent />
    </div>
  );
}

export default App;
