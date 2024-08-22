import "./Default.css";
import BgSvg from "../components/bg_svg";
import { useRouter } from "../components/RoseRouter/RoseRouter";
import {
  ShinyButton,
  ShinyText,
  ModernBtn,
  Ak_Alert,
  AnimatedText,
  CounterUp,
  RoseBox,
  RoseMouse,
  SplitText,
  WaveText,
  RoseParent,
} from "../LaRose";
function Default() {
  const { navigate } = useRouter();

  // Happy Hacking (˶ˆᗜˆ˵)
  return (
    <>
      <RoseParent RoseID="App">
        <BgSvg />
        <Ak_Alert
          edit={{ position: "fixed", top: "10%", right: "5%", width: "7rem" }}
          time={Infinity}
        >
          <CounterUp start={0} end={1000} time={10} />{" "}
        </Ak_Alert>
        <ModernBtn
          color={"white"}
          allColor={"red"}
          title={"Go To Home"}
          clickEvent={() => navigate("/Home")}
        />
        <ShinyButton
          edit={{ fontSize: "1rem", height: "3rem", minWidth: "2rem" }}
        >
          <ShinyText
            speed={3}
            edit={{ color: "white", background: "transparent" }}
          >
            Shiny Animation
          </ShinyText>
        </ShinyButton>
        <WaveText>Wave Text</WaveText>
        <SplitText>Split Text</SplitText>
        <AnimatedText animationType="zoomIn">Animated Text</AnimatedText>
        <RoseMouse mouseShadow edit={{ background: "blue" }}></RoseMouse>

        <RoseBox flex autoLayout AutoHandling>
          <WaveText> Wave Text</WaveText> <SplitText> Split Text</SplitText>{" "}
          <AnimatedText animationType="zoomIn"> Animated Text</AnimatedText>
          <RoseMouse RoseId="mousePointer"  mouseShadow edit={{ background: "blue" }}></RoseMouse>
        </RoseBox>
      </RoseParent>
    </>
  );
}

export default Default;

