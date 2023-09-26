import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Card from '../Pages/Card';
import Home from '../Pages/Home';
import ErrorPage from "../Pages/Error404";
import About from "../Pages/About";


function Routes(){
    const router= createBrowserRouter([
        { path:"/", element:<Home />, errorElement:<ErrorPage /> },
        { path: "/about", element: <About />, errorElement:<ErrorPage /> },
        { path: "/logement", element: <Card />, errorElement:<ErrorPage /> },
        { path: "*", element: <ErrorPage /> } 
    ]);
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    )
}
export default Routes

