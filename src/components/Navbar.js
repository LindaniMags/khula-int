import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-left">
          <h3>KHULA!</h3>
          <div className="search-input-con">
            <input type="text" placeholder="Search" />
            <MdOutlineArrowDropDown />
          </div>
          <nav className="nav-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="/">Quotes</a>
              </li>
              <li>
                <a href="/">Orders</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
              <li>
                <a href="/">Account</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="cart-log">
          <div className="cart-con">
            <p
              style={{
                backgroundColor: "crimson",
                borderRadius: "50%",
                height: "20px",
                width: "20px",
                color: "white",
              }}
            >
              1
            </p>
            <strong>
              <p style={{ paddingRight: "25px" }}>Cart</p>
            </strong>
          </div>
          <strong>
            <p>Logout</p>
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
