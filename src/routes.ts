import accountPage from './pages/accountPage';
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
    name: 'Authentication Page',
    protected: false,
  },
  {
    path: '/register',
    component: AuthPage,
    name: 'Authentication Page',
    protected: false,
  },
  {
    path: '/',
    component: MainPage,
    name: 'Main Page',
    protected: true,
  },
  {
    path: '/account',
    component: accountPage,
    name: 'Account',
    protected: true,
  },
];

export default routes;
