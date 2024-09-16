import React, { useEffect, useState } from "react";
import { RoseRouter, Route, SnakeMouse } from "./components/LaRose";
import NavBar from "./components/NavBar/NavBar";
import DocsPage from "./components/Docs/Docs";
import HomePage from "./components/Home/Home";

function App() {
  const api = "https://count-website-views.onrender.com/count";
  useEffect(() => {
    const postViewCount = async () => {
      "use server";
      try {
        await fetch(api, {
          method: "POST",
        });
      } catch (error) {
        console.error("Error posting view count:", error);
      }
    };

    postViewCount();
  }, []);
  
  let customStyle = `.route {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    background:black;
  }
  .route-active {
    opacity: 1;
    transform: translateY(0);
    background:black;
  }`;

  return (
    <RoseRouter customStyles={customStyle}>
      <NavBar />
      <Route path="/" element={<HomePage />} />
      <Route path="/Docs" element={<DocsPage />} />
    </RoseRouter>
  );
}

export default App;
