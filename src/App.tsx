import RouterControllers from '../src/routes/router-controllers';
import MainLayout from './layouts/MainLayout';
function App() {
  return (
    <div className="App">
      <MainLayout>
        <RouterControllers />
      </MainLayout>
    </div>
  );
}

export default App;
