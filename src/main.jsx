import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from "./home/HomePage.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CategoryPage from "./category/CategoryPage.jsx";
import BlogPage from "./blog/BlogPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/blogs",
        element: <BlogPage />,
    },
    {
        path: "/categories",
        element: <CategoryPage />,
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
