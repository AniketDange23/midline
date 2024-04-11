import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactPage from "./Pages/ContactPage.jsx";
import ProjectPage from "./Pages/ProjectPage.jsx";
import ServicesPage from "./Pages/ServicesPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";


import Home from "./Pages/HomePage.jsx";
import { AppProvider } from "./Components/context.jsx";
import HealthInsurance from './Components/ProjectsComponents/ProjectsComponents/HealthInsurance';
import MedicareSupplement from './Components/ProjectsComponents/ProjectsComponents/MedicareSupplement';
import FinalExpense from './Components/ProjectsComponents/ProjectsComponents/FinalExpense';
import B2BLeadGeneration from './Components/ProjectsComponents/ProjectsComponents/B2BLeadGeneration';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/contact",
        element: <ContactPage />,
      },

      {
        path: "/project",
        element: <ProjectPage />,
      },

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
        path: "/service",
        element: <ServicesPage />,
      },
      {
        path:"/about",
        element:<AboutPage/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AppProvider>
);
