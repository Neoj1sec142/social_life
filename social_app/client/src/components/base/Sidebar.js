import React, { useContext } from 'react';
import { useStateContext } from '../../utils/StateContext';

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useStateContext();

  return (
    <nav className={`d-flex bg-light p-3 flex-column ${sidebarOpen ? 'open' : 'closed'}`} style={{ width: "25%", height: "100vh" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-2">
            <button className="btn btn-primary" onClick={() => setSidebarOpen(false)}>Close</button>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Messages</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;





