import React from "react";
import { Route, Routes } from "react-router-dom";
import Default from "./Tabs/Default";
import Home from "./Tabs/Home";
import BgSvg from "./components/bg_svg";

export default function App() {
  return (
    <>
      <BgSvg />
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
}
