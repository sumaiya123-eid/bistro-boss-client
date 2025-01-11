import React from "react";
import { FaHome, FaShoppingCart, FaUtensilSpoon } from "react-icons/fa";
import {
  FaBangladeshiTakaSign,
  FaBook,
  FaBookAtlas,
  FaCreativeCommonsBy,
  FaList,
  FaPhone,
  FaStreetView,
  FaUser,
} from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

export default function Dashboard() {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-[250px] bg-[#D1A054] min-h-screen">
        <h3 className="flex justify-center font-bold mt-6 ">BISTRO BOSS </h3>
        <h3 className="text-center mb-10">RESTAURANT</h3>
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensilSpoon></FaUtensilSpoon>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBookAtlas></FaBookAtlas>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUser></FaUser>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/userHome">
                  <FaHome></FaHome>USER HOME
                </Link>
              </li>
              <li>
                <Link to="/dashboard/cart">
                  <FaBook></FaBook>RESERVATION
                </Link>
              </li>
              <li>
                <Link to="/dashboard/paymentHistory">
                  <FaBangladeshiTakaSign></FaBangladeshiTakaSign>PAYMENT HISTORY
                </Link>
              </li>
              <li>
                <Link to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>MY CART
                </Link>
              </li>
              <li>
                <Link to="/dashboard/cart">
                  <FaStreetView></FaStreetView> REVIEW
                </Link>
              </li>
              <li>
                <Link to="/dashboard/cart">
                  <FaCreativeCommonsBy></FaCreativeCommonsBy>MY BOOKING
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className="divider"></div>
        <ul className="menu">
          <li>
            <Link to="/">
              <FaHome></FaHome>HOME
            </Link>
          </li>
          <li>
            <Link to="/menu">
              <FaList></FaList>MENU
            </Link>
          </li>
          <li>
            <Link to="/shop/salad">
              <FaShoppingCart></FaShoppingCart>SHOP
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FaPhone></FaPhone>CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
