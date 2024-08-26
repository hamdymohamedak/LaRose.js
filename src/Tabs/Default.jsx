import "./Default.css";
import { useRouter } from "../components/RoseRouter/RoseRouter";
import {
  Ak_Alert,
  CounterUp,
  RoseMouse,
  Notification,
  SideText,
  AnimatedText,
  useDocumentTitle,
  useRand,
  SplitText,
  Spring,
  Variants,
} from "../LaRose";
import { useEffect, useState } from "react";

function Default() {
  const { navigate } = useRouter();
  const [randomNumber, setRandomNumber] = useRand(1000, 10000);
  const [title, setTitle] = useState("LaRose.js");
  const [springBgColor, setSpringBgColor] = useState("white");


  useDocumentTitle(title);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitle("LaRose.jsx");
      setSpringBgColor("black");
    }, randomNumber);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, [randomNumber]);

  return (
    <div id="App">
      <div className="navbar">
        <SideText direction="left">
          <Ak_Alert edit={{ background: "black" }} time={Infinity}>
            <CounterUp start={0} end={randomNumber} time={1} />
          </Ak_Alert>
        </SideText>
        <SideText direction="right">
          <Notification
            CrossIconColor="white"
            edit={{ background: "black", color: "white" }}
            delay={Infinity}
            iconDisplay="none"
            Message="Hello Devs"
            DesMessage="LaRose is: React library To speed up the development process and make it easy"
          />
        </SideText>
      </div>
      <div className="titleParent">
        <SplitText RoseName={"title"} delay={0.5} direction="left" >{title}</SplitText>
        <AnimatedText edit={{
          margin: "1rem",
          width: "width: 92%",
          textAlign: "center",
        }} animationType="zoomIn">
          At LaRose, you'll find everything you need to speed up your development process. Our React library offers a comprehensive collection of hooks and components designed to make your development easier and more efficient.</AnimatedText>
      </div>
      <div className="downBar">
        <Spring drag edit={{ background: springBgColor }} />
        <Variants edit={{ background: "black", }} />
      </div>
    </div>
  );
}

export default Default;
