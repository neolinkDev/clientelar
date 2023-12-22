import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import NewClientPage from './pages/NewClientPage';
import IndexPage from './pages/IndexPage';
import { loader as clientsLoader } from './supabase/clients/loader';
import { action as newClientPageAction } from './actions/action1';


const router = createBrowserRouter([
  {
   path: '/',
   element: <Layout />,
   children:[
    {
      index: true,
      element: <IndexPage />,
      loader: clientsLoader
    },
    {
      path: '/clientes/nuevo',
      element: <NewClientPage />,
      action: newClientPageAction
    }
   ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);
