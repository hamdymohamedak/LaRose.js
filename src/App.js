import React, { useState } from "react";
import { RoseBox } from "./LaRose";
import "./App.css";
import { useRenderTime } from "./test";
export default function App() {
  const renderTime = useRenderTime();
  return (
    <RoseBox RoseName="App">
      <code>Larose with bun.js</code>
      <code>Hello world</code>
      <div>
        {renderTime !== null && (
          <p>Render time Speed: {renderTime.toFixed(2)} ms</p>
        )}
      </div>  
    </RoseBox>
  );
}
