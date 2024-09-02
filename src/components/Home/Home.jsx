import "./Home.css";
import Logo from "../../Assets/LaRose.webp";
import {
  AnimatedText,
  RoseBox,
  ShinyButton,
  ShinyText,
  SideText,
  SplitText,
  useRouter,
} from "../LaRose";

export default function Home() {
  let { navigate } = useRouter();

  return (
    <div className="home_sec">
      <SideText direction="left">
        <img loading="lazy" className="homeLogo" src={Logo} alt="LaRose Logo" />
      </SideText>
      <div>
        <SplitText RoseId="p">
          An open-source React.js snippet library for animated components and
          hooks
        </SplitText>
        <AnimatedText animationType="zoomIn" RoseId="p">
          for Get Started at Larose Project || Clone Github Project
        </AnimatedText>
      </div>
      <div className="btnParnet">
        <SideText direction="left">
          <RoseBox onClick={() => navigate("/Docs")} RoseName="StartedBtn">
            Get Started
          </RoseBox>
        </SideText>
        <SideText direction="right">
          <ShinyButton
            ShinyButtonEvent={() => window.open("https://github.com/hamdymohamedak/LaRose.js")}
            RoseName="shinyBtn"
          >
            <SideText>
              <ShinyText
                edit={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.2rem",
                  margin: "0",
                }}
              >
                Github
              </ShinyText>
            </SideText>

          </ShinyButton>
        </SideText>
      </div>
    </div>
  );
}
