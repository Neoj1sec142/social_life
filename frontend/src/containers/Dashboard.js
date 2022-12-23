import React, {useEffect, useState} from 'react'
import Sidebar from '../components/base/Dashbar'
import { useStateContext } from '../utils/ContextProvider'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiOutlineMenu } from 'react-icons/ai';
import Profile from '../components/profile/Profile';

const NavButton = ({ title, customFunc, icon, color }) => (
  <TooltipComponent content={title} position="BottomCenter">
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
    <>
    <div>
      {inEffect}
    </div>
    {activeMenu ? <Sidebar /> : <NavButton title="Menu" customFunc={handleActiveMenu} color="red" icon={<AiOutlineMenu />} />}
    </>
  )
}

export default Dashboard