import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Hero from './Hero/hero';
import Items from './Items/Items';
import Deal from './Deals/Deal';
import Enquiry from './Enquiry/Enquiry';
import Signup from './SignUp/Signup';
import Login from './Login/Login';

const router=createBrowserRouter([
{
  path :'/',
  element: <Layout/>,
  children:[
    {
      path :"",
      element :<Hero/>
    },
    {
      path: "shop",
      element :<Deal/>
    },
    {
    path :"contact",
    element:<Enquiry/>
    },
    {
      path:"login",
      element:<Login/>
    }
  ]
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
