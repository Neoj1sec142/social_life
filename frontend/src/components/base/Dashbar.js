import React from 'react'
import {Link} from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../../utils/ContextProvider'

const Dashbar = () => {
  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  const {activeMenu, setActiveMenu, setDashboard} = useStateContext();

  const handleCloseSidebar = () => {
    if(activeMenu){
      setActiveMenu(false)
    }
  }

  

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to='/' onClick={handleCloseSidebar} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
            <SiShopware /> <span>Social Earth</span>
          </Link>
          <TooltipComponent content="Close" style={{
            left: 0, marginLeft: '2%', marginRight: '95%'
          }} position="TopLeft" >
            <button type='button' onClick={()=>{setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 m-2 block md:hidden'>
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className='mt-3'>
            <div>
              <p className='text-gray-400 m-3 mt-3'>title</p>
              {/* Turn these links into buttons for handleing in page navigation */}
                <button onClick={()=>{setDashboard('profile')}}
                  // style={({isActive}) => ({backgroundColor: isActive ? 'gray' : ''})} 
                  className={({isActive})=> isActive ? activeLink : normalLink}>
                    icon<span>name</span>
                </button>
            </div>
        </div>
      </>)}
    </div>
  )
}

export default Dashbar