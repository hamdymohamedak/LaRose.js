import {
  RoseBox,
  RandomAnimate,
  WaveText,
  useRenderTime,
  useLocalStorage,
  BlockUser,
} from "./LaRose";
import "./App.css";
export default function App() {
  const renderTime = useRenderTime();
  const [user, setUser] = useLocalStorage("isBlocked", false);
  const handleBlock = () => {
    setUser(true);
  };
  return (
    <RoseBox RoseName="App">
      <WaveText>let's Start Development</WaveText>
      <RandomAnimate edit={{}}>
        {/* {{}} for removing default Style */}
        Hello world
      </RandomAnimate>
      <div>
        {renderTime !== null && (
          <p>Render time Speed: {renderTime.toFixed(2)} ms</p>
        )}
      </div>
      <BlockUser blockUser={false} />
      <button onClick={handleBlock}>Click to Block</button>
    </RoseBox>
  );
}
