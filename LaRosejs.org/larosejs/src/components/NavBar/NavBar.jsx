import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../Assets/LaRose.webp";
import { RandomAnimate, SideText, useRouter } from "../LaRose";
export default function NavBar() {
  let [menuStyle, setMenuStyle] = useState("-100%");
  let { navigate } = useRouter()
  let handleMenu = () => {
    setMenuStyle("0");
  };
  let closeMenu = () => {
    setMenuStyle("-100%");
  };
  return (
    <>
      <div className="navbarparent">
        <div>
          <RandomAnimate
            edit={{
              height: "auto",
            }}
          >
            <img onClick={() => { navigate("/") }} className="navbarLogo" src={logo} alt="LaRose Logo" />
          </RandomAnimate>
        </div>
        <ul>
          <li onClick={() => { navigate("/") }}>
            {" "}
            <SideText direction="right">Home</SideText>{" "}
          </li>
          <li onClick={() => { navigate("/Docs") }}>
            <SideText direction="right">Docs</SideText>
          </li>
          <li onClick={() => { window.open("https://github.com/hamdymohamedak/larose.js") }}>
            <SideText direction="right">github</SideText>
          </li>
          <li onClick={() => { window.open("https://askander.vercel.app") }}>
            <SideText direction="right">whoe made this?</SideText>
          </li>
        </ul>
      </div>
      <div id="smallnavbarContainer">
        <div
          style={{ transform: `translateX(${menuStyle})` }}
          className="smallnavbarparent"
        >
          <div>
            <img className="smallnavbarlogo" src={logo} alt="LaRose Logo" />
          </div>
          {/* Mobile Menu */}
          <div onClick={closeMenu} className="parentLine">
            <div style={{ background: "white" }} className="line"></div>
            <div style={{ background: "white" }} className="line"></div>
            <div style={{ background: "white" }} className="line"></div>
          </div>
          <ul id="smallScreensMenu">
            <li onClick={() => { navigate("/") }}>Home</li>
            <li onClick={() => { navigate("/Docs") }}>Docs</li>
            <li onClick={() => { window.open("https://github.com/hamdymohamedak/larosejs") }}>Github</li>
            <li onClick={() => { window.open("https://askander.vercel.app") }}>Who made this?</li>
          </ul>
        </div>
        {/* Mobile Navbar */}
        <img className={"logoAtSmallNavbar"} src={logo} alt="LaRose Logo" />
        <div onClick={handleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
}
