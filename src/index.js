import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import App from './pages/App.jsx';
import Table from './pages/Table.jsx';

import './style/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Table />,
  },
  {
    path: "/app",
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
