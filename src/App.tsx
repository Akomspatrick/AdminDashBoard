
import { Css } from '@mui/icons-material';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/route';

const globalStyles={
  a:{
    color:"unset",
    textdiacoration:"none"
  }
}
function App() {
  return (
   <>
   <CssBaseline/>
   <GlobalStyles styles={globalStyles}/>
   <RouterProvider router={router}/>
   </>
  );
}

export default App;
