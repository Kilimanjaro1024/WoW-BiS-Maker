import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>Main</div>
      </Link>  
      <Link to="/itemsearch">
        <div>Item Search</div>
      </Link>
      <Link to="/bislist">
        <div>Bis List</div>
      </Link>
    </div>
  );
};

export default Nav