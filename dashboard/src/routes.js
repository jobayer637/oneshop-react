import React, {lazy} from 'react';
const CreateCollection = lazy(() => import('./views/collection/CreateCollection')) 
const Collection = lazy(() => import('./views/collection/Collection'))
const Dashboard = lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/collection', name: 'Dashboard', component: Collection },
  { path: '/collection/create', name: 'Dashboard', component: CreateCollection }
];

export default routes;
