import React from "react";
import { RoseRouter, Route } from "./components/RoseRouter/RoseRouter";
import Default from "./Tabs/Default";
import Home from "./Tabs/Home";
import BgSvg from "./components/bg_svg";

export default function App() {
  const customAnimation = `
    .route {
        opacity: 0;
        transform: scale(0.90);
        transition: opacity 0.4s ease,  transform 0.4s ease;
        transform:translateX(100%);
    }

    .route-active {
        opacity: 1;
        transform: scale(1);
        transform:translateX(0);
        
    }
`;
  return (
    <RoseRouter>
      <BgSvg />
      <Route path="/" element={<Default />} />
      <Route path="/Home" element={<Home />} />
    </RoseRouter>
  );
}
