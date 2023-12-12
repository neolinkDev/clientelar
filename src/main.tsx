import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import NewClientPage from './pages/NewClientPage';
import IndexPage from './pages/IndexPage';

const router = createBrowserRouter([
  {
   path: '/',
   element: <Layout />,
   children:[
    {
      index: true,
      element: <IndexPage />
    },
    {
      path: '/clientes/nuevo',
      element: <NewClientPage />
    }
   ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);
