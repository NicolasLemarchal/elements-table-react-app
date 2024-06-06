import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import Table from './pages/Table.jsx';
import ElementPage from './pages/Element.jsx';
import About from './pages/About.jsx';
import ErrorPage from './pages/Error.jsx';

import './style/index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Table />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "/:number",
    element: <ElementPage />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
