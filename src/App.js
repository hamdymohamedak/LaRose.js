import React from "react";
import "./App.css";
import {
  Ak_Alert,
  CounterDown,
  LaRoseText,
  MiniNav,
  ModernBtn,
  Slider,
} from "./LaRose";
import LaRose from "./LaRose.png";
function App() {
  return (
    <>
      <div className="App">
        <img src={LaRose} alt="LaRose_Logo" />
        <LaRoseText text={"welcome at LaRose.js"} fontSize={1.9} />
        <div className="alert">
          <Ak_Alert
            JSX={<CounterDown start={2} end={0} time={0.9} />}
            title={"Simple To Customize "}
            time={2000}
          />
        </div>
        <div className="sliderStyle">
          <Slider autoplayInterval={2000} autoplay>
            <ModernBtn
              title={"Documentation"}
              allColor={"rgb(80, 154, 248)"}
              color={"white"}
              hoverColor={"black"}
              clickEvent={() => {
                window.open("#");
              }}
            />
            <ModernBtn
              title={"Repository"}
              allColor={"rgb(80, 154, 248)"}
              color={"white"}
              hoverColor={"black"}
              clickEvent={() => {
                window.open("https://github.com/hamdymohamedak/LaRose.js");
              }}
            />
          </Slider>
        </div>
        <MiniNav h={3} w={20} />
      </div>
    </>
  );
}
export default App;
