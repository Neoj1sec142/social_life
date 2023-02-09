import React, { createContext, useState, useContext } from 'react';

// Create the context
const StateContext = createContext({});

// Create the context provider
export const ContextProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [dataType, setDataType] = useState(null);
  
  return (
    <StateContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        notificationsOpen,
        setNotificationsOpen,
        dataType,
        setDataType,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext)