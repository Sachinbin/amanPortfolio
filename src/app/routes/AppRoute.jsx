import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from '../layout/Dashboard';
import Home from '../../feature/dashboard/ui/page/Home';
import About from '../../feature/dashboard/ui/page/About';
import Portfolio from '../../feature/portfolio/ui/page/Portfolio';
import Contact from '../../feature/contact/ui/page/Contact';
import CategoryPage from '../../feature/dashboard/ui/components/CategoryPageUi';

const AppRoute = () => {
    let router = createBrowserRouter([
        {
            path:"/",
            element:<Dashboard/>,
            children:[
                {
                    path:"",
                    element:<Home/>,
                },
                {
                    path:"about",
                    element:<About/>
                },
                // {
                //     path:"portfolio",
                //     element:<Portfolio/>
                // },
                {
                    path:"contact",
                    element:<Contact/>
                },
                {
                    path:"/:id",
                    element:<CategoryPage/>
                }

            ]
        }
    ])
  return <RouterProvider router={router}/>
}

export default AppRoute
