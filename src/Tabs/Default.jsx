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
  Notification,
} from "../LaRose";
import Table from "../components/Table/Table";
import { useEffect, useState } from "react";
function Default() {
  const { navigate } = useRouter();

  const [apiData, setApiData] = useState({});

  useEffect(() => {
    const api = "https://fakestoreapi.com/products/3";

    fetch(api)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.text();
      })
      .then((text) => {
        if (text) {
          return JSON.parse(text);
        }
        throw new Error("Empty response body");
      })
      .then((json) => setApiData(json))
      .catch((error) => console.error("Error fetching API:", error));
  }, []);

  const data = [{ id: apiData.id, title: apiData.title, price: apiData.price }];

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Title", accessor: "title" },
    { header: "Price", accessor: "price" },
  ];
  return (
    <RoseParent RoseID="App">
      <BgSvg />
      <Ak_Alert
        edit={{ position: "fixed", top: "10%", right: "5%", width: "7rem" }}
        time={Infinity}
      >
        <CounterUp start={0} end={1000} time={10} />{" "}
      </Ak_Alert>
      <Notification
        delay={20000}
        Message="Hello Devs"
        DesMessage="Front End Devs"
      />

      <ModernBtn
        color={"white"}
        allColor={"red"}
        title={"Go To Home"}
        clickEvent={() => navigate("/Home")}
      />
      <ShinyButton
        ShinyButtonEvent={() => {
          window.location.reload();
        }}
        edit={{ fontSize: "1rem", height: "3rem", minWidth: "2rem" }}
      >
        <ShinyText
          speed={3}
          edit={{ color: "white", background: "transparent" }}
        >
          Shiny Animation | Reload
        </ShinyText>
      </ShinyButton>
      <WaveText RoseName={"wavetext"}>Wave Text</WaveText>
      <SplitText>Split Text</SplitText>
      <AnimatedText animationType="zoomIn">Animated Text</AnimatedText>
      <RoseMouse mouseShadow mouseShadowColor="white" />

      <RoseBox flex autoLayout AutoHandling>
        <WaveText>Wave Text</WaveText>
        <SplitText>Split Text</SplitText>
        <AnimatedText animationType="zoomIn">Animated Text</AnimatedText>
        <RoseMouse RoseId="mousePointer" mouseShadow mouseShadowColor="white" />
      </RoseBox>

      <RoseBox autoLayout AutoHandling>
        <Table RoseID={"table"} data={data} columns={columns} />
      </RoseBox>
    </RoseParent>
  );
}

export default Default;
