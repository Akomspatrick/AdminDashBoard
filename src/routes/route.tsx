import {createBrowserRouter, createHashRouter} from 'react-router-dom';

import AppLayout from '../components/layout/AppLayout';

import LoginPage from '../pages/LoginPage';
import DashBoardPage from '../pages/DashBoardPage';
import Mainlayout from '../components/layout/Mainlayout';
export const router = createBrowserRouter([{
    path: "/", element:<AppLayout/>,
    children: [
        {
            index: true,
            element: <LoginPage/>
        },
         { path: "dashboard", element: <Mainlayout/>, children: [{
            index: true,
            element: <DashBoardPage/>
         }] },
      
    ]
}]);