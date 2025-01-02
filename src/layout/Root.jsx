import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

export default function Root() {
  const location=useLocation()
  console.log(location)
  const noNavAndFoot = location.pathname.includes('/login') || location.pathname.includes('/register')
  return (
    <div>
       {noNavAndFoot ||  <Navbar></Navbar>}
        <Outlet></Outlet>
        {noNavAndFoot || <Footer></Footer>}
    </div>
  )
}
