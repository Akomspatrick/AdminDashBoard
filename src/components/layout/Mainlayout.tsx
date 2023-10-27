import Box from '@mui/material/Box'
import React from 'react'
import { Outlet } from 'react-router-dom'
import TheSideBar from '../common/TheSideBar';
//import SideBar from '../common/Sidebar';
const sideBarWidth=350;


const Mainlayout = () => {
  return (
   <Box display="flex">
    {/* <SideBar/> */}
<TheSideBar/>
    {/* <Outlet/> */}
    <Box component="main" sx={{flexGrow:1,
        p:3,
        height:"100vh",
        width: {sm:`calc:(100%- ${sideBarWidth}px)`}
         }}>
        <Outlet/>
    </Box>
   </Box>
  )
}

export default Mainlayout