import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main/Main';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Home from '../Pages/Home/Home/Home';
import Blog from '../Pages/Blog/Blog';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Recipes from '../Pages/Home/Recipes/Recipes';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'recipe/:id',
                element:<Recipes></Recipes>,
                loader: ({params}) => fetch(`https://chef-recipe-hunter-server-alaminrifat.vercel.app/chef/${params.id}`)
            },
            {
                path:'/*',
                element:<ErrorPage></ErrorPage>
            }
        ]
    },
]);

export default router;