// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetail from './components/ProductDetail.jsx'



const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>,
    
  },
  {
    path: '/product/:id',
    element : <ProductDetail/>
  }
]
  
)
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
