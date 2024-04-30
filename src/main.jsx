import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AppProvider } from "./Components/context.jsx";
import ContactPage from './Pages/ContactPage';

import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import AboutPage from './Pages/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/contact",
        element: <ContactPage/>,
      },


      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);
