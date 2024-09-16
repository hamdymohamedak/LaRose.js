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
  useContinentContent,
  ViewportContainer,
  Slider
} from "../LaRose";
import { useEffect, useState } from "react";
export default function Home() {
  let { navigate } = useRouter();
  const api = "https://count-website-views.onrender.com/count";
  let [usersCount, setUsersCount] = useState("loading...");
  let [countAnimate, setCountAnimate] = useState("loading...");
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch(api, { method: "GET" });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await res.json();
        setUsersCount(json.count);
        setIsLoading(false);
        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = (json.count / duration) * 10;
        const animate = () => {
          start += increment;
          if (start < json.count) {
            setCountAnimate(Math.ceil(start));
            setTimeout(animate, 10);
          } else {
            setCountAnimate(json.count);
          }
        };
        animate();
      } catch (error) {
        console.error("Failed to fetch user count:", error);
        setIsLoading(false);
      }
    };
    fetchCount();
  }, [api]);
  const { continent } = useContinentContent();
  return (
    <ViewportContainer>
      <div className="home_sec">
        {continent === "Africa" || "Asia" ? <marquee style={{ color: "white", fontWeight: "bold" }}>Support palestine 🇵🇸</marquee> : ""}
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
        <SideText edit={{ fontSize: "1.1rem", fontWeight: "bold" }}><RoseBox AutoHandling autoLayout>Users: {countAnimate}</RoseBox></SideText>
        <div>
        </div>
      </div>
    </ViewportContainer>
  );
}
