import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import NewClientPage from './pages/NewClientPage';
import IndexPage from './pages/IndexPage';
import { EditClient } from './pages/EditClient';
import { loader as clientsLoader } from './supabase/clients/loader';
import { loader as editClientLoader } from './supabase/clients/loader2';
import { action as newClientPageAction } from './actions/action1';
import { action as editClientAction } from './actions/action2';
import { action as deleteClientAction } from './actions/action3';

import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
  {
   path: '/',
   element: <Layout />,
   children:[
    {
      index: true,
      element: <IndexPage />,
      loader: clientsLoader,
      errorElement: <ErrorPage />
    },
    {
      path: '/clientes/nuevo',
      element: <NewClientPage />,
      action: newClientPageAction
    },
    {
      path: '/clientes/:id/editar',
      element: <EditClient />,
      loader: editClientLoader,
      action: editClientAction,
      errorElement: <ErrorPage />
    },
    {
      path: '/clientes/:id/eliminar',
      action: deleteClientAction
    }
   ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);
