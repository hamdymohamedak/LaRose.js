import React, { useState, useEffect } from "react";
import "./SideBar.css";
import { SideText, } from "../LaRose";
const components = [
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
  "SeeMore",
  "VHContainer",
  "Carousel"
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
  "usePhotoState",
  "useCountry",
  "useContinent",
  "useGetUserContacts",
  "useVHVisibility"
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
  SeeMore: `The SeeMore component is designed to display a truncated version of a text, with an option to expand and show the full content. It is useful for scenarios where you want to limit the visible text to a certain number of characters and provide users with a way to view more if they are interested. NEW: : : SeeMore component Now Support hidden elements with maxElement Prop`,
  useBettaryStatus: `The useBatteryStatus hook provides a simple way to access and manage the user's battery status in a React application. It leverages the Battery Status API to retrieve real-time information about the device's battery level and charging status.`,
  usePreferredLanguage: `The usePreferredLanguage hook retrieves the user's preferred language from their browser or system settings. It returns the language code (e.g., "en" for English, "fr" for French) that indicates the primary language the user prefers to use.`,
  useColorScheme: `The useColorScheme hook detects the user's preferred color scheme—either "light" or "dark"—based on their system or browser settings. It returns a string that indicates whether the user prefers a light or dark theme, allowing you to adapt your application's appearance accordingly.`,
  useHardwareConcurrency: `The useHardwareConcurrency hook retrieves the number of logical processor cores available on the user's device. It returns an integer representing the number of CPU cores, which can be used to optimize performance-intensive operations, such as parallel processing or adjusting the number of concurrent tasks.`,
  useCountry: `Handle Different States:
Loading State: Show a loading indicator while the data is being fetched.
Error State: Display an error message if the fetch fails.
Success State: Once the data is successfully retrieved, you can display the user's country.
Here’s a simple example of how you can use these states in your component:`,
  useContinent: `Geolocation: It uses the navigator.geolocation API to get the user's current geographic coordinates (latitude and longitude).
Continent Determination: Based on these coordinates, it determines which continent the user is located on. You’ll need to implement the getContinent function or use a service to handle this.
Error Handling: If geolocation isn’t available or there’s an error, the hook sets the continent to 'Unknown'.
This approach allows you to dynamically display content based on the user's location, enhancing user experience by providing location-specific information.`,
  usePhotoState: `To use the usePhotoCapture hook in your React project, simply import it and call the hook within your component. The hook automatically starts the user's camera, and you can use the takePhoto function to capture an image. The captured image is stored as a base64 string in the photo variable, which can be displayed as an image element. Additionally, the hook provides a videoRef to display the live camera feed and a canvasRef for capturing the photo. If there’s any issue accessing the camera, the cameraError variable will provide an error message to the user. Here’s a quick example of how to implement it:`,
  useGetUserContacts: `To use the useGetContacts hook in your React application, import it into your component and call the getContacts function to fetch the user's contacts. This hook handles the contact retrieval process, managing loading states and errors. The fetched contacts are stored in the contacts array, which you can display in your UI. If the device or browser does not support the Contacts API, the hook includes mock contact data for testing purposes.
For testing on devices without contacts, such as a laptop, you can use the mock data provided in the hook or test on a real mobile device. Here’s an example implementation:`,
  VHContainer: `The ViewportContainer component is designed to efficiently load content only when it becomes visible in the user's viewport, making it a great solution for improving performance, especially on pages with a lot of media or heavy content. The component can be used to defer the rendering of any elements until they are actually needed (when they scroll into view), thus optimizing load times and reducing unnecessary content rendering.
To use the ViewportContainer:
Wrap your content inside the ViewportContainer component.
Use the lazyLoad prop to enable or disable lazy loading.
Adjust the threshold to control when the content should start loading (e.g., if 10% of the component is in the viewport).
Modify the rootMargin for controlling the margin around the viewport to trigger content loading earlier or later based on scroll.Component Power and When to Use It
The ViewportContainer component is powerful for the following reasons:
Improved performance: By lazy-loading content, you reduce the initial load size, which can make your page faster, especially on slower connections.
Better user experience: Users only load content when it's needed, leading to faster interactions.
Optimized resource usage: With IntersectionObserver, the browser efficiently handles content that is scrolled into view.
`,
  useVHVisibility: `The useViewportVisibility hook is useful in scenarios where you want to manage the visibility of a component based on whether it is currently in the viewport. Here are some common use cases:
1. Lazy Loading Content
When you have content that should only be loaded when it comes into view, such as images or heavy components, using this hook can help you defer loading until necessary. This improves performance by reducing the initial load time and saving bandwidth.
2. Infinite Scrolling
For implementing infinite scrolling, where new content is loaded as the user scrolls down, you can use this hook to trigger content fetching when the user scrolls near the bottom of the page.
3. Animations and Transitions
You can use this hook to trigger animations or transitions only when a component becomes visible. For example, fading in an element or applying a slide-in effect as it scrolls into view.
4. Tracking User Engagement
In situations where you want to track how often and for how long a user views specific parts of your page, this hook can be used to monitor the visibility of components and gather data for analytics.
5. Conditional Rendering
If you have parts of your UI that should only be rendered when visible to the user (e.g., complex widgets or modals), this hook helps manage their rendering to ensure they appear only when needed.`,
  Carousel: `The Slider component you provided is a reusable and customizable slider that supports autoplay functionality, manual navigation through next/previous buttons, and pagination. You can use this component to display any type of content within slides, such as images, text, or even other React components.`
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
  import { useDocumentTitle } from 'larose';
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
export default App;
// New
<<"SeeMore Now support hidden Components and Divs with maxElement prop">>
`,
  usePhotoState: `import usePhotoCapture from './usePhotoCapture';
function MyComponent() {
  const { takePhoto, photo, videoRef, canvasRef, cameraError } = usePhotoCapture();
  return (
    <div>
      {cameraError ? <p>{cameraError}</p> : (
        <>
          <video ref={videoRef} style={{ width: '100%', maxWidth: '400px' }} />
          <canvas ref={canvasRef} style={{ display: 'none' }} width="400" height="300"></canvas>
          <button onClick={takePhoto}>Capture Photo</button>
          {photo && <img src={photo} alt="Captured" style={{ width: '100%', maxWidth: '400px' }} />}
        </>
      )}
    </div>
  );
}
export default MyComponent;`,
  useCountry: `import { useUserCountry } from './path/to/useUserCountry';
const UserCountryComponent = () => {
  const { country, loading, error } = useUserCountry();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      <p>Your country is: {country}</p>
    </div>
  );
};
export default UserCountryComponent;`,
  useContinent: `import { useContinentContent } from './path/to/useContinentContent';
const ContinentDisplay = () => {
  const { continent } = useContinentContent();
  return (
    <div>
      <p>Your continent is: {continent || 'Determining your location...'}</p>
    </div>
  );
};
export default ContinentDisplay;`,
  useGetUserContacts: `import React from 'react';
import useGetContacts from 'LaRose';
export default function ContactsComponent() {
  const { contacts, error, isFetching, getContacts } = useGetContacts();
  return (
    <div>
      <button onClick={getContacts} disabled={isFetching}>
        {isFetching ? 'Fetching Contacts...' : 'Get Contacts'}
      </button>
      {error && <p>{error}</p>}
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <strong>{contact.name?.[0] || 'Unnamed Contact'}</strong><br />
              {contact.email?.[0] && <span>Email: {contact.email[0]}</span>}<br />
              {contact.tel?.[0] && <span>Phone: {contact.tel[0]}</span>}
            </li>
          ))}
        </ul>
      ) : (
        !isFetching && <p>No contacts found.</p>
      )}
    </div>
  );
}`,
  VHContainer: `import { ViewportContainer } from 'LaRose'; 
const Example = () => {
  return (
  <div>
      <h1>Long Page</h1>
      <p>Some initial content...</p>
      <ViewportContainer lazyLoad={true}>
        <section>
          <h2>Section 1</h2>
          <p>Content of section 1...</p>
        </section>
      </ViewportContainer>
      <ViewportContainer lazyLoad={true}>
        <section>
          <h2>Section 2</h2>
          <p>Content of section 2...</p>
        </section>
      </ViewportContainer>
    </div>
  );
};
export default Example;`,
  useVHVisibility: `import useViewportVisibility from 'LaRose'; 
const LazyImage = ({ src, alt }) => {
  const { ref, isVisible } = useViewportVisibility();
  return (
    <div ref={ref} style={{ minHeight: '200px', margin: '20px 0' }}>
      {isVisible ? (
        <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};
export default LazyImage;
`,
  Carousel: `import React from 'react';
import { Slider } from 'LaRose';
function App() {
  return (
    <Slider autoplay={true} autoplayInterval={4000}>
      <div style={{ backgroundColor: 'lightblue', height: '100vh' }}>
        <h2>Slide 1</h2>
        <p>This is the first slide</p>
      </div>
      <div style={{ backgroundColor: 'lightcoral', height: '100vh' }}>
        <h2>Slide 2</h2>
        <p>This is the second slide</p>
      </div>
      <div style={{ backgroundColor: 'lightgreen', height: '100vh' }}>
        <h2>Slide 3</h2>
        <p>This is the third slide</p>
      </div>
    </Slider>
  );
}
export default App;
`
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
