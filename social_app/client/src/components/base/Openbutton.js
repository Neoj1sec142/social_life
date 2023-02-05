import React, { useContext } from 'react';
import { useStateContext } from '../../utils/StateContext';

const OpenButton = () => {
  const { setSidebarOpen } = useStateContext();

  return (
    <button className="btn btn-primary fixed-start m-3" onClick={() => setSidebarOpen(true)}>Open Sidebar</button>
  );
};

export default OpenButton;