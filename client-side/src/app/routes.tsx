import App from './App';
import Sales from '../sales/Sales';
import Dashboard from '../dashboard/Dashboard';

const routes = [
  {
    path: '/',
    exact: true,
    component: <Dashboard />,
  },
  {
    path: '/cart',
    exact: true,
    component: <Sales />,
  },
];

export default routes;