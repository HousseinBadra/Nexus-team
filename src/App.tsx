import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from './routes';
import './styles.css';
import { RootState } from './store';

function App() {
  const auth = useSelector((state: RootState) => state.AuthSlice);
  console.log(auth);
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          element={
            // eslint-disable-next-line no-nested-ternary
            route.protected ? (
              auth.auth != null ? (
                <route.component />
              ) : (
                <Navigate to="/login" />
              )
            ) : (
              <route.component />
            )
          }
        />
      ))}
    </Routes>
  );
}

export default App;
