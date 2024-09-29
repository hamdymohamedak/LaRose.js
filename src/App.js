import {
  RoseBox,
  RandomAnimate,
  WaveText,
  useRenderTime,
  useLocalStorage,
  BlockUser,
  ShinyText,
  ShinyButton,
} from "./LaRose";
import "./App.css";
export default function App() {
  const renderTime = useRenderTime();

  let open_docs = () => {
    window.open("https://larose.vercel.app");
  };

  return (
    <RoseBox RoseName="App">
      <WaveText>let's Start Development</WaveText>
      <RandomAnimate edit={{}}>Hello world</RandomAnimate>
      <ShinyButton onClick={open_docs}>
        <ShinyText edit={{ color: "white" }}>Learn LaRose</ShinyText>
      </ShinyButton>
      <div>
        {renderTime !== null && (
          <p>Render time Speed: {renderTime.toFixed(2)} ms</p>
        )}
      </div>
    </RoseBox>
  );
}
