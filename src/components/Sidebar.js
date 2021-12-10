import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <AiFillHome className="side-icon"/>
          <p>Home</p>
        </Link>
        <Link to="/">
          <AiFillFund className="side-icon"/>
          <p>Cryptocurrencies</p>
        </Link>
        <Link to="/">
          <AiFillMoneyCollect className="side-icon"/>
          <p>Exchnages</p>
        </Link>
        <Link to="/">
          <BiNews className="side-icon"/>
          <p>News</p>
        </Link>
        
        
      </div>
    </div>
  );
};

export default Sidebar;
