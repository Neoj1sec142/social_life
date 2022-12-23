import React, {Fragment, useEffect, useState} from 'react'
import { useStateContext } from '../utils/ContextProvider'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiOutlineMenu } from 'react-icons/ai';
import { connect } from 'react-redux';
import Sidebar from '../components/base/Dashbar'
import Profile from '../components/profile/Profile';

const NavButton = ({ title, customFunc, icon, color }) => (
  <TooltipComponent content={title} style={{
    left: 0, marginLeft: '2%', marginRight: '95%'
  }} position="TopLeft" >
  
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: 'gray' }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Dashboard = () => {
  const { activeMenu, setActiveMenu, dashboard, setDashboard } = useStateContext();
  const [inEffect, setInEffect] = useState(null)
  useEffect(() => {
    switch(dashboard){
      case 'profile':
        setInEffect(<Profile />)
        break
      default:
        setInEffect(<Profile />)
    }
  },[dashboard])
  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  return (
    <Fragment>
    <div>
      {inEffect}
    </div>
    {activeMenu ? (
      <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
        <Sidebar />
      </div>
    ) : (
      <div className="w-0 dark:bg-secondary-dark-bg">
        <NavButton title="Menu" customFunc={handleActiveMenu} color="red" icon={<AiOutlineMenu />} />
      </div>
    )}
    </Fragment>
  )
}

export default connect(null, {})(Dashboard)