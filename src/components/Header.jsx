import React from "react";
import "../styles/Header.css";
import logo from "../images/logo.svg";

function Header() {
  return (
    <section className="head">
      <img alt="digitori logo" className="logo" src={logo}></img>
      <header className="header">Birds of Japan</header>
    </section>
  );
}

export default Header;
