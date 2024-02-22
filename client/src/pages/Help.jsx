import React from 'react'
import Navbar from '../components/common/Navbar/main';
import { useNavigate } from 'react-router-dom';
function Help() {
  const navigateTo = useNavigate();
  // Creating a function to navigate to home page for the constructing pages
  // You can change or modify the code down below

  const gobackHandler = function() {
    navigateTo('/');
  }
  return (
    <>
      <Navbar />
        <div>Help page in construction</div>
        <button onClick={gobackHandler}>Go Back</button>
    </>
  )
}

export default Help