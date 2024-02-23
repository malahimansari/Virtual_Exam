import Header from '../Dashboard/Header/main';
import Home from '../Dashboard/Home/main';
import Sidebar from '../Dashboard/Sidebar/main';
import { useState } from 'react';
import '../styles/dashboard.css';
function Dashboard() {
  
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    // It simply changes the value between true and false repeatedly.
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
     <Header OpenSidebar={OpenSidebar} />
     <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
     <Home />
    </div>
     
     
     
    
  );
}

export default Dashboard;