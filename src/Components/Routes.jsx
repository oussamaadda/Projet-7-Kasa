import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Card from '../Pages/Card';
import Home from '../Pages/Home';
import Error404 from "../Pages/Error404";
import About from "../Pages/About";


function Routes(){
    const router= createBrowserRouter([
        {path:"/", element:<Home/>, errorElement:<Error404/> },
        {path:'/logement', element: <Card/>, errorElement:<Error404/>},
        {path:"*", errorElement:<Error404/>},
        {path:"/about", element:<About/>, errorElement:<Error404/>}
    ]);
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    )
}
export default Routes

