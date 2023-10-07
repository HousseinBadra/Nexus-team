import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import './styles.css';

function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.name} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}

export default App;
