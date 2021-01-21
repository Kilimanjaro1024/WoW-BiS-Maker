import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <img src="https://assets.stickpng.com/images/5a576a4d1c992a034569ab75.png" alt="" height="81.5" width="200"/>
        {/* <div>Main</div> */}
      </Link>
      <div className="navItems">
        <Link to="/itemsearch">
          <div id="itemSearch">Item Search</div>
        </Link>
        <Link to="/bislist">
          <div id="bisList">Bis List</div>
        </Link>
      </div> 
    </div>
  );
};

export default Nav