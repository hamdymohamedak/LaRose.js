import { RoseBox, RandomAnimate, WaveText, useRenderTime } from "./LaRose";
import "./App.css";
export default function App() {
  const renderTime = useRenderTime();
  return (
    <RoseBox RoseName="App">
      <WaveText>let's Start Development</WaveText>
      <RandomAnimate edit={{}}> {/* {{}} for remove default Style */}
        Hello world
      </RandomAnimate>
      <div>
        {renderTime !== null && (
          <p>Render time Speed: {renderTime.toFixed(2)} ms</p>
        )}
      </div>
    </RoseBox>
  );
}
