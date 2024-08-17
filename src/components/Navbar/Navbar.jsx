import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  let handleHome = () => {
    window.open("/", "_self");
  };
  return (
    <header className="navbar">
      <h1 style={{ cursor: "pointer" }} onClick={handleHome}>
        AK-MACROS
      </h1>
      <ul className="navbar-list">
        <li> <Link to={"/Installation"}>Installation</Link> </li>
        <li> <Link to={"/Akp"}>Usage</Link> </li>
        <li> <Link to={"https://github.com/hamdymohamedak/AK-Macros"}>GitHub</Link> </li>
        <li> <Link to={"https://askander.vercel.app"}>Contacts</Link> </li>
        <li> <Link to={"/chatbot"}>ChatBot</Link></li>
      </ul>
    </header>
  );
}
