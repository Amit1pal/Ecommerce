import React from 'react'
import Header,{Footer} from './Header/header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header/>
        <Outlet/> 
        {/* outlet is used to make it as a base so that header and footer remains same in all pages */}
    <Footer/>
    </>
  )
}

export default Layout