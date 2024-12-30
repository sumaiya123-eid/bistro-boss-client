import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

export default function Root() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
