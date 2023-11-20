import {createBrowserRouter, Navigate} from "react-router-dom";
import {AuthLayout, MainLayout, PublicLayout} from "./Layout";
import {CarsPage, LoginPage, RegisterPage} from "./Pages";


const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'cars'}/>},
            {element:<PublicLayout/>, children:[
                    {path:'login', element:<LoginPage/>},
                    {path:'register', element:<RegisterPage/>}

                ]},
            {element:<AuthLayout/>, children:[
                    {path: 'cars', element: <CarsPage/>}
         ]}
        ]}
])

export {router}