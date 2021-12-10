import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import logo from "../images/cryptocurrency.png";
import { AiFillHome, AiFillMoneyCollect, AiFillFund } from "react-icons/ai";
import { BiNews } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-heading flex">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <h1>CryptoHub</h1>
       
      </div>
      <div className="sidebar-links ">
        <NavLink className={({ isActive }) => isActive ? "active-link" : "sidelink"} to="/">
          <AiFillHome className="side-icon"/>
          <p>Home</p>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "active-link" : "sidelink"} to="/cryptocurrencies">
          <AiFillFund className="side-icon"/>
          <p>Cryptocurrencies</p>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "active-link" : "sidelink"} to="/exchanges">
          <AiFillMoneyCollect className="side-icon"/>
          <p>Exchanges</p>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "active-link" : "sidelink"} to="/news">
          <BiNews className="side-icon"/>
          <p>News</p>
        </NavLink>
        
        
      </div>
    </div>
  );
};

export default Sidebar;
