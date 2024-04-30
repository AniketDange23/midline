import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  title: "",
  subTitle: "",
  banner: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateContactPage = () => {
    return dispatch({
      type: "CONTACT_PAGE",
      payload: {
        title: "CONTACT US",
        subTitle: "Contact Us",
        image: "./images/g3.jpeg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_PAGE",
      payload: {
        title: "ABOUT ",
        subTitle: "About",
        image: "./images/g8.jpg",
      },
    });
  };

  const updateServicesPage = () => {
    return dispatch({
      type: "SERVICES_PAGE",
      payload: {
        title: "SERVICES ",
        subTitle: "Services",
        image: "./images/g7.jpg",
      },
    });
  };

 

  return (
    <AppContext.Provider
      value={{
        ...state,
        updateAboutPage,
        updateContactPage,
        updateServicesPage,
      
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { AppContext, AppProvider, useGlobalContext };
