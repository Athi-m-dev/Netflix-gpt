import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
const Body = () => {
    const Approuter   = createBrowserRouter([
        {
            path : "/",
            element : <Login />
        },
        {
            path : "/Browse",
            element : <Browse/>
        }
    ])
    return (
        <div>
            <RouterProvider router={Approuter} />
        </div>
    )
}

export default Body
