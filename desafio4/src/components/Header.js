import React from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

function Header() {
  return (
    <header id="main-header">
      <img height="50" src={logo}></img>
      <span id="profile">
        <span>Meu Perfil</span>
        <FontAwesomeIcon className="icon" icon={["fas", "user-circle"]} />
      </span>
    </header>
  );
}

export default Header;
