import Home from './containers/Home';
import Auth from './containers/Auth';
import DetailPhoto from './containers/DetailPhoto';

export const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },  
  {
    component: Auth,
    path: '/auth',
  },  
  {
    component: DetailPhoto,
    path: '/photo/:id'
  },
];