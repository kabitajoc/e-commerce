import React from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div className="nav-bar">
      <p className="logo">
        Euphoria
        <span>keep it classy</span>
      </p>

      <ul>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">Combos</a>
        </li>
        <li>
          <a href="#">Joggers</a>
        </li>
      </ul>

      <div className="search-bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input placeholder="  search" />
      </div>
      <div className="nav-icons">
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </div>
  );
};

export default Nav;
