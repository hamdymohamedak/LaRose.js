import React, { useState, useEffect } from "react";
import "./SideBar.css";
import { SideText } from "../LaRose";
const components = [
  // "Ak_Alert",
  "AnimatedText",
  "Loader",
  "RandomAnimate",
  "RoseBox",
  "RoseRouter",
  "UseRouter",
  "ShinyButton",
  "SideText",
  "SplitText",
  "Spring",
  "Variants",
  "WaveText",
  "CounterUp",
  "CounterDown",
  "SwitchCase",
  "SideBox",
  "SeeMore"
];

const hooks = [
  "UseLocalStorage",
  "UseRand",
  "UseClipboard",
  "useDocumentTitle",
  "useOnlineStatus",
  "useBettaryStatus",
  "usePreferredLanguage",
  "useColorScheme",
  "useHardwareConcurrency",
];

export const howCanIUseIt = {
  Ak_Alert:
    "The Ak_Alert component takes a 'time' value in milliseconds. You can set it to Infinity for an infinite alert.",
  AnimatedText:
    "The AnimatedText component allows text to be animated with various effects. Customize using the 'edit' prop.",
  Loader:
    "The Loader component is a loading page component and does not take any values.",
  RandomAnimate:
    "The RandomAnimate component applies random animations to its children.",
  RoseBox:
    "RoseBox is a component easy to style and has styling like autoLayout and autoHandling props.",
  RoseRouter:
    "Rose Router is a Custom Router With Animation and you can Custom animation to anything you want to do but you cant change route and route-active classess you can change values only",
  UseRouter:
    "useRouter is a custom navigator can go to any page at your Routes with animation you select it at RoseRouter",
  ShinyButton:
    "ShinyButton is a stylish button component that can handle click actions.",
  SideText:
    "The SideText component animates text coming from either left or right based on the 'direction' prop.",
  SplitText:
    "The splitText component splits text with animation, allowing control over delay and speed.",
  Spring:
    "The Spring component is a draggable box that can be placed anywhere on the website.",
  Variants:
    "The Variants component supports dragging and dropping its children anywhere on the page.",
  WaveText:
    "The WaveText component animates text with a wave effect, customizable with delay and speed props.",
  CounterUp:
    "The counterUp component increments a counter from a start value to an end value over a specified time.",
  CounterDown:
    "The counterDown component decrements a counter from a start value to an end value over a specified time.",
  SwitchCase:
    "The switchCase component is a switch button with various actions for your project.",
  SideBox: "The SideBox component is a versatile and animated side panel designed to appear from either the left,right,top and bottom side of the viewport. It can be customized with additional styles and classes, making it adaptable to various design needs. the Selector for SideBox is RoseID SideBox dont Have RoseName  ",
  SeeMore: `The SeeMore component is designed to display a truncated version of a text, with an option to expand and show the full content. It is useful for scenarios where you want to limit the visible text to a certain number of characters and provide users with a way to view more if they are interested.`,
  useBettaryStatus: `The useBatteryStatus hook provides a simple way to access and manage the user's battery status in a React application. It leverages the Battery Status API to retrieve real-time information about the device's battery level and charging status.`,
  usePreferredLanguage: `The usePreferredLanguage hook retrieves the user's preferred language from their browser or system settings. It returns the language code (e.g., "en" for English, "fr" for French) that indicates the primary language the user prefers to use.`,
  useColorScheme: `The useColorScheme hook detects the user's preferred color scheme—either "light" or "dark"—based on their system or browser settings. It returns a string that indicates whether the user prefers a light or dark theme, allowing you to adapt your application's appearance accordingly.`,
  useHardwareConcurrency: `The useHardwareConcurrency hook retrieves the number of logical processor cores available on the user's device. It returns an integer representing the number of CPU cores, which can be used to optimize performance-intensive operations, such as parallel processing or adjusting the number of concurrent tasks.`
};

export const CodeSyntax = {
  Ak_Alert: `<Ak_Alert edit={{/*inline Style*/}} title={"Hello World"} time={Infinity} />
{/* OR */}
<Ak_Alert edit={{/*inline Style*/}} time={Infinity}>Hello world</Ak_Alert>`,
  AnimatedText: `AnimationsType: "blur","fadeIn","slideIn","zoomIn"
{/* initialAnimateTypeStyle: Character or Word */}
<AnimatedText RoseId={ /* ID */ } RoseName={/* ClassName */} animationType="" initialAnimateTypeStyle="" speed={/*by ms*/} edit={{/*Inline Style*/}} delay={/*by ms*/}>Hello</AnimatedText>`,
  RandomAnimate: `Animations:"fadeIn","slideInLeft","zoomIn","rotateIn","bounceIn","flipInX","flipInY","lightSpeedIn","rollIn","jackInTheBox",
<RandomAnimate AnimatedType={"zoomIn"} RoseID={/*ClassName*/} edit={/*Inline Style*/}RoseName={/*ID*/} >Hello</RandomAnimate>`,
  RoseBox: `background = "color",RoseName = "ClassName",
RoseID = "ID",
autoLayout=>boolean,
shadow=>boolean,
shadowColor=> color,
aspectRatio=>value,
atHover=>boolean,
grid=>boolean,
flex=>boolean,
scaleAnimate => boolean,
childrenVisible => boolean,
onClick => function
ariaLabel,
role,
lazy = true,
AutoHandling = true,
outlineOffset = 0,
<RoseBox edit={/*Inline Style*/} RoseID={/*ID*/} RoseName={/*Rose Name*/}  lazy  grid>Hello</RoseBox>`,
  RoseRouter: `let customStyle = ".route {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.route-active {
  opacity: 1;
  transform: translateY(0);
}"
<RoseRouter customStyles={customStyle}>
<Route path="/" element={<HomePage />} />
<Route path="/About" element={<AboutPage/>} />
</RoseRouter>
`,
  UseRouter: `import { useRouter } from "../LaRose";
let { navigate } = useRouter()
<RoseBox onClick={() => { navigate("/Docs") }} RoseName="StartedBtn">Get Started</RoseBox>`,
  ShinyButton: `<ShinyButton RoseId={"ID"} RoseName={"ClassName"} ShinyButtonEvent={"/*Function*/"} backgroundColor="color" borderRadius="with PX" padding="With REM" edit={{Inline Style}} speed={"0.2"} color="fontColor">
  Hello
</ShinyButton>
`,
  SideText: `<SideText RoseID={"ID"} RoseName={"ClassName"} direction="Right or left" edit={{inline Style}}>Hello</SideText>`,
  Spring: `<Spring drag={true} RoseID={"ID"} edit={{inline Style} RoseName={"ClassName"} rotate={"90"} x="0 REM" y="0 REM" z="0 REM" speed={0.2} scale={1}></Spring>`,
  SplitText: `<SplitText RoseId={"ID"} RoseName={"ClassName"} delay={0.2} initialAnimateTypeStyle="character or word" speed={0.2} edit={{inline Style}}>Hello</SplitText>`,
  Variants: `<Variants RoseID={"ID"} edit={{inline style}} RoseName={"ClassName"} rotate={20} scale={1} speed={0.2} x="0rem" y="0rem" z="0rem"></Variants>`,
  WaveText: `<WaveText RoseId={"ID"} RoseName={"ClassName"} delay={0.2} frequency={0} initialWaveType="character or word" speed={0.2} edit={{ "inline style"}}>Hello</WaveText>`,
  CounterUp: `<CounterUp start={0} end={1000} size={2/*REM*/} weight={600} time={0.1}/>`,
  CounterDown: `<CounterDown start={1000} end={0} size={2/*REM*/} time={0.1}/>`,
  UseLocalStorage: `import { useLocalStorage } from 'LaRose';

function App() {
  const [name, setName] = useLocalStorage('name', 'HamdyMohamedak');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      <p>Stored Name: {name}</p>
    </div>
  );
}

export default App;
`,
  UseRand: `import { useRand } from 'LaRose'

function RandomNumberComponent() {
  const [randomNumber, refreshRandomNumber] = useRand(1, 100);

  return (
    <div>
      <p>Random Number: {randomNumber}</p>
      <button onClick={refreshRandomNumber}>Refresh Number</button>
    </div>
  );
}

export default RandomNumberComponent;
  `,
  UseClipboard: `import { useClipboard } from 'larose';

function ClipboardComponent() {
  const [copied, copyToClipboard] = useClipboard();

  return (
    <div>
      <button onClick={() => copyToClipboard('Hello, World!')}>
        Copy Text
      </button>
      {copied && <p>Text copied to clipboard!</p>}
    </div>
  );
}

export default ClipboardComponent;
  `,
  useDocumentTitle: `import React, { useState } from 'react';
  >>import { useDocumentTitle } from 'larose';

function Page() {
  const [title, setTitle] = useState('LaRose');

  useDocumentTitle(title);

  return (
    <div>
      <h1>Change Document Title</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter new title"
      />
    </div>
  );
}

export default Page;
`,
  useOnlineStatus: `import React from 'react';
import { useOnlineStatus } from 'larose';

function StatusIndicator() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <p>{isOnline ? 'You are online' : 'You are offline'}</p>
    </div>
  );
}

export default StatusIndicator;
`,
  SideBox: `<SideBox
    direction="left"
    RoseID="mySideBox"
    edit={{ backgroundColor: 'lightblue' }}

>
    <h2>Special Content</h2>
    <p>This panel slides in from the right and has a custom background color.</p>
</SideBox>
`,
  useBettaryStatus: `import React from 'react';
import useBatteryStatus from '.';

const BatteryStatusComponent = () => {
  const { level, charging } = useBatteryStatus();

  return (
    <div>
      {level !== null ? (
        <div>
          <p>Battery Level: {Math.round(level * 100)}%</p>
          <p>{charging ? 'Charging' : 'Not Charging'}</p>
        </div>
      ) : (
        <p>Battery Status API not supported or unable to retrieve battery status.</p>
      )}
    </div>
  );
};

export default BatteryStatusComponent;`,
  usePreferredLanguage: `import usePreferredLanguage from 'LaRose';

function App() {
  const preferredLanguage = usePreferredLanguage();

  return (
    <div>
      <p>Your preferred language is: {preferredLanguage}</p>
    </div>
  );
}

export default App;`,
  useColorScheme: `import useColorScheme from './hooks/useColorScheme';

function App() {
  const colorScheme = useColorScheme();

  const appStyle = {
    backgroundColor: colorScheme === 'dark' ? '#333' : '#fff',
    color: colorScheme === 'dark' ? '#fff' : '#000',
    padding: '20px',
    minHeight: '100vh',
  };

  return (
    <div style={appStyle}>
      <p>The current color scheme is: {colorScheme}</p>
    </div>
  );
}

export default App;`,
  useHardwareConcurrency: `import useHardwareConcurrency from 'LaRose';

function App() {
  const coreCount = useHardwareConcurrency();

  return (
    <div>
      <p>Your device has {coreCount} CPU cores available.</p>
    </div>
  );
}

export default App;`,
  SeeMore: `import { SeeMore } from './SeeMore';

function App() {
  return (
    <div>
      <SeeMore
        maxCharacters={50}
        edit={{ padding: '10px' }}
        RoseName="custom-class"
        RoseId="unique-id"
        editButton={{ fontSize: '1rem',color:"blue" }}
      >
        This is a long piece of text that will be truncated if it exceeds the maximum character limit specified.
      </SeeMore>
    </div>
  );
}

export default App;`

};

export default function SideBar({ onComponentSelect }) {
  const [sideBarTranslate, setSideBarTranslate] = useState("-100%");

  useEffect(() => {
    const updateSidebarPosition = () => {
      setSideBarTranslate(window.innerWidth < 768 ? "-100%" : "0%");
    };

    // Set initial sidebar position
    updateSidebarPosition();

    // Add resize event listener
    window.addEventListener('resize', updateSidebarPosition);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSidebarPosition);
    };
  }, []);

  const handleNavigation = (component) => {
    const howToUse = howCanIUseIt[component] || "No information available.";
    onComponentSelect(component, howToUse);
  };

  const toggleMenu = () => {
    setSideBarTranslate(sideBarTranslate === "0%" ? "-100%" : "0%");
  };

  return (
    <>
      <SideText direction="left">
        <div
          style={{
            transform: `translateX(${sideBarTranslate})`,
            transition: "transform 0.3s ease-in-out",
          }}
          className="sideBar"
        >
          <ul>
            <SectionTitle title="Components" />
            {components.map((component) => (
              <NavItem
                key={component}
                onClick={() => handleNavigation(component)}
              >
                {component}
              </NavItem>
            ))}
            <Divider />
            <SectionTitle title="Hooks" />
            {hooks.map((hook) => (
              <NavItem key={hook} onClick={() => handleNavigation(hook)}>
                {hook}
              </NavItem>
            ))}
          </ul>
        </div>
      </SideText>
      <button aria-label="ButtonMenu" onClick={toggleMenu} className="SideBarMenuBtn">
        <div style={{ background: "black" }} className="line"></div>
        <div style={{ background: "black" }} className="line"></div>
        <div style={{ background: "black" }} className="line"></div>
      </button>
    </>
  );
}

const SectionTitle = ({ title }) => (
  <div style={{ margin: "auto", textAlign: "center" }}>
    <h2>{title}</h2>
  </div>
);

const NavItem = ({ onClick, children }) => (
  <li>
    <button aria-label="Button" className="SideBarButton" onClick={onClick}>{children}</button>
  </li>
);
const Divider = () => (
  <>
    <br />
    <hr style={{ width: "100%" }} />
  </>
);
