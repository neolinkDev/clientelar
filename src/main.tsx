import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import NewClientPage from './pages/NewClientPage';
import IndexPage from './pages/IndexPage';
import { loader as clientsLoader } from './routes/loaders/loader1';
import { EditClient } from './pages/EditClient';
import { loader as editClientLoader } from './routes/loaders/loader2';
import { action as newClientPageAction } from './routes/actions/action1';
import { action as editClientAction } from './routes/actions/action2';
import { action as deleteClientAction } from './routes/actions/action3';

import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
  {
   path: '/',
   element: <Root />,
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
      action: newClientPageAction,
      errorElement: <ErrorPage />
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
