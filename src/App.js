import React from "react";
import "./App.css";
import { Ak_Alert } from "./LaRose";
function App() {
  return (
    <>
      <style>{`
    .App{
    display:"flex";
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    }
    `}</style>
      <div className="App">
        <Ak_Alert time={10000} title={"hello from LaRose"} />
      </div>
    </>
  );
}
export default App;
