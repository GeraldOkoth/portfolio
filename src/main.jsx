import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/about', element: <App />},
  // {path: '/project/:id', element: <App />},
  {path: '/projects', element: <App />},
  {path: '/contact', element: <App />},
  {path: '/login', element: <App />},
  // {path: '*', element: <NotFoundPage />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);