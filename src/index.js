import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import App from './pages/App.jsx';
import Table from './pages/Table.jsx';
import ErrorPage from './pages/Error.jsx';

import './style/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Table />,
    errorElement: <ErrorPage />
  },
  {
    path: "/app",
    element: <App />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
