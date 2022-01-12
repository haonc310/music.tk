import RouterControllers from '../src/routes/router-controllers';
import MainLayout from './layouts/MainLayout';
import ModalComponent from './modal/modal-component';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <RouterControllers />
      </MainLayout>
      <ModalComponent />
    </div>
  );
}

export default App;
