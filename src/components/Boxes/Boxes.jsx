import React, { useState, useEffect } from "react";
import "./Boxes.css";

export default function Boxes() {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setStyle({ boxShadow: "1px 1px 35px -5px black" });
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="box">
      {[...Array(5)].map((_, index) => (
        <div key={index} style={style} className="box-child"></div>
      ))}
    </section>
  );
}
