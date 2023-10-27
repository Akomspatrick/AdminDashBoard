import Box from '@mui/material/Box'
import React from 'react'
import { images } from '../assets'
import { Colors } from 'chart.js';
import { colors } from '@mui/material';

const LoginPage = () => {
    const [onRequest,setOnRequest]=React.useState(false);
    // const [onSuccess,setOnSuccess]=React.useState(false);
    // const [onError,setOnError]=React.useState(false);
    // const [errorMessage,setErrorMessage]=React.useState("");
    // const [email,setEmail]=React.useState("");
    // const [password,setPassword]=React.useState("");
    // const [isPassword,setIsPassword]=React.useState(true);
    // const [isEmail,setIsEmail]=React.useState(true);
    // const [isPasswordError,setIsPasswordError]=React.useState(false);
    const [loginProgress,setLoginProgress]=React.useState(0);
    const [isloggedIn,setIsLoggedIn]=React.useState(false);
  return (
   <Box
   position="relative"
   height="100vh"
   sx={{"::-webkit-scrollbar": {display:"none"}}}>
    {/* Barckground box*/}
 
        <Box
        sx={{
        position:"absolute",
        right:0,
        height:"100%",
        width:"70%",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        // top={0}
        // left={0}
        // right={0}
        // bottom={0}
        // sx={{
        backgroundImage:`url(${images.loginBg})`,
        // 
        // backgroundPosition:"center",
        // zIndex:-1
        }}
        />
   {/* Login Box */}
    <Box sx={{position:"absolute",
        left:0,
        height:"100%",
        width:isloggedIn? "100%": {x1:"30%",lg:"40%",md:"50%",xs:"100%"},
        transition:"all 1s ease-in-out",
        bgcolor:colors.common.white}}>
        <Box sx={{display:"flex", flexDirection:"space-between",opacity:isloggedIn? 0:1, height:"100%" , "::-webkit-scrollbar":{display:"none"}  }}>
            {/* Logo */}
            <Box sx={{textAlign:"center",p:5}}>
            <img src={images.logo} alt="logo" width="100px" height={60}/>
            </Box>
            {/* Login Form */}
            <Box sx={{position:"absolute", top:0,left:0,width:"100%",height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>

            </Box>
        </Box>       

    </Box>
   </Box>
  )
}

export default LoginPage