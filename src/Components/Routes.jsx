import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Card from '../Pages/Card';
import Home from '../Pages/Home'


function Routes(){
    const router= createBrowserRouter([
        {path:"/", element:<Home/>},
        {path:'/logement', element: <Card/>}
    ]);
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    )
}
export default Routes

