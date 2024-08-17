import React from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../sideBar/SideBar";
import "./defualt.css";
import Syntax from "../SyntaxHighlighter/Syntax";
export default function Default({ title, des, p, code }) {
  return (
    <>
      <Navbar />
      <section className="sec-Default">
        <SideBar />
        <div>
          <div className="Defualt-title">{title}</div>
          <div className="Defualt-des">{des}</div>
          <p className="Defualt-p">{p}</p>
          <Syntax
            code={`${code}`}
          />
        </div>
      </section>
      <Navbar />
    </>
  );
}
