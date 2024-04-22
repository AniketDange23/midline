import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AppProvider } from "./Components/context.jsx";
import ContactPage from './Pages/ContactPage';
import HealthInsurance from './Components/ProjectsComponents/ProjectsComponents/HealthInsurance';
import FinalExpense from './Components/ProjectsComponents/ProjectsComponents/FinalExpense';
import HomePage from './Pages/HomePage';
import B2BLeadGeneration from './Components/ProjectsComponents/ProjectsComponents/B2BLeadGeneration';
import ServicesPage from './Pages/ServicesPage';
import AboutPage from './Pages/AboutPage';
import MedicareSupplement from './Components/ProjectsComponents/ProjectsComponents/MedicareSupplement'

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

      // {
      //   path: "/project",
      //   element: <ProjectPage />,
      // },

      {
        path: "/healthproject",
        element: <HealthInsurance />,
      },

      {
        path: "/medicareproject",
        element: <MedicareSupplement />,
      },

      {
        path: "/expenseproject",
        element: <FinalExpense />,
      },

      {
        path: "/b2bleadproject",
        element: <B2BLeadGeneration />,
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
