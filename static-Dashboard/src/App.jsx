import { useState } from 'react'
// import Dashboard from './assets/components/features/Dashboard/main'
import './App.css'
import Header from './assets/components/features/Dashboard/Header/main'
import Sidebar from './assets/components/features/Dashboard/Sidebar/main'
import Home from './assets/components/features/Dashboard/Home/main'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    // It simply changes the value between true and false repeatedly.
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  );
}

export default App
