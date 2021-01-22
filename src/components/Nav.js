import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="menu">
      <Link to="/">
        <img src="https://i.imgur.com/mbUgBN8.png" alt="" height="74" width="187.625"/>
        {/* <div>Main</div> */}
      </Link>
      <div className="navItems">
        <Link to="/itemsearch">
          <div id="itemSearch">Item Search</div>
        </Link>
        <div className="vl"/>
        <Link to="/bislist">
          <div id="bisList">Bis List</div>
        </Link>
      </div> 
    </div>
  );
};

export default Nav