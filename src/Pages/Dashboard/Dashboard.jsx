import React from 'react'
import { FaHome, FaShoppingCart } from 'react-icons/fa'
import { FaBangladeshiTakaSign, FaBook, FaCreativeCommonsBy, FaList, FaPhone, FaStreetView } from 'react-icons/fa6'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className='flex'>
        <div className='w-[250px] bg-[#D1A054] min-h-screen'>
            <h3 className='flex justify-center font-bold mt-6 '>BISTRO BOSS </h3>
            <h3 className='text-center mb-10'>RESTAURANT</h3>
            <ul className="menu">
                <li><Link to='/dashboard/home'><FaHome></FaHome>USER HOME</Link></li>
                <li><Link to='/dashboard/cart'><FaBook></FaBook>RESERVATION</Link></li>
                <li><Link to='/dashboard/cart'><FaBangladeshiTakaSign></FaBangladeshiTakaSign>PAYMENT HISTORY</Link></li>
                <li><Link to='/dashboard/cart'><FaShoppingCart></FaShoppingCart>MY CART</Link></li>
                <li><Link to='/dashboard/cart'><FaStreetView></FaStreetView> REVIEW</Link></li>
                <li><Link to='/dashboard/cart'><FaCreativeCommonsBy></FaCreativeCommonsBy>MY BOOKING</Link></li>
               </ul>
               <div className="divider"></div>
               <ul className="menu">
                <li><Link to='/'><FaHome></FaHome>HOME</Link></li>
                <li><Link to='/menu'><FaList></FaList>MENU</Link></li>
                <li><Link to='/shop/salad'><FaShoppingCart></FaShoppingCart>SHOP</Link></li>
                <li><Link to='/contact'><FaPhone></FaPhone>CONTACT</Link></li>
               </ul>
        </div>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}
