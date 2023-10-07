import AuthPage from './pages/authentication';
import MainPage from './pages/mainPage';

export interface RouteType {
  path: string;
  component: () => JSX.Element;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: '/login',
    component: AuthPage,
    name: 'Login Page',
    protected: false,
  },
  {
    path: '/',
    component: MainPage,
    name: 'Main Page',
    protected: false,
  },
];

export default routes;
