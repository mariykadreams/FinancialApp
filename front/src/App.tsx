import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';


function App() {
  
  return (
   <>
   <Navbar />
   <Outlet />
   <ToastContainer />
   </>
  )
}

export default App
