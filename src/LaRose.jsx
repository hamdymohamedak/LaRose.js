// LaRose is a Library was built with "Hamdy Mohamed Askander"
// for More Visit => https://askander.vercel.app
// Happy Hacking (˶ˆᗜˆ˵)
import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useRef,
} from "react";
export function Ak_Alert({ title, time, edit = {}, children }) {
  const [display, setDisplay] = useState("flex");
  useEffect(() => {
    if (time === Infinity) {
      setDisplay("flex");
      return;
    }
    const timer = setTimeout(() => {
      setDisplay("none");
    }, time);
    return () => clearTimeout(timer);
  }, [time]);
  const styles = {
    info: {
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      width: "20rem",
      padding: "0.75rem",
      display: display,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "start",
      background: "#509AF8",
      borderRadius: "8px",
      boxShadow: "0px 0px 5px -3px #111",
      position: "relative",
      zIndex: "999",
      ...edit,
    },
    infoIcon: {
      width: "20px",
      height: "20px",
      transform: "translateY(-2px)",
      marginRight: "8px",
    },
    infoTitle: {
      fontWeight: 500,
      fontSize: "1rem",
      color: "#fff",
    },
    infoClose: {
      width: "1.1rem",
      height: "1.1rem",
      cursor: "pointer",
      marginLeft: "auto",
      position: "absolute",
      right: "0.9rem",
      top: "50%",
      transform: "translateY(-50%)",
    },
  };
  const handleClose = () => {
    setDisplay("none");
  };
  return (
    <>
      <div style={styles.info}>
        <div style={styles.infoIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            viewBox="0 0 24 24"
            height={24}
            fill="none"
          >
            <path
              fill="#fff"
              d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"
            />
          </svg>
        </div>
        <div style={styles.infoTitle}>{title}</div>
        <div onClick={handleClose} style={styles.infoClose}>
          <svg
            height={20}
            viewBox="0 0 20 20"
            width={20}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
              fill="#fff"
            />
          </svg>
        </div>
        <div style={{ marginLeft: "1rem" }}>{children}</div>
      </div>
    </>
  );
}
export function Button({ h, w, event, children, edit = {} }) {
  const [hover, setHover] = useState(false);
  const baseStyle = {
    height: `${h}rem`,
    width: `${w}rem`,
    backgroundImage:
      "linear-gradient(to right, #e52d27 0%, #b31217 51%, #e52d27 100%)",
    margin: "0.9rem",
    padding: "1rem 2.2rem",
    textAlign: "center",
    textTransform: "uppercase",
    transition: "0.5s",
    backgroundSize: "200% auto",
    color: "white",
    boxShadow: "0 0 20px #eee",
    borderRadius: "10px",
    display: "flex",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    ...edit,
  };
  const hoverStyle = {
    backgroundPosition: "right center",
    color: "#fff",
    textDecoration: "none",
  };
  const combinedStyle = hover ? { ...baseStyle, ...hoverStyle } : baseStyle;
  let handleEvent = () => {
    if (typeof event === "function") {
      event();
    }
  };
  return (
    <>
      <button
        role="button"
        aria-label="button"
        style={combinedStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleEvent}
      >
        {children}
      </button>
    </>
  );
}
export function CounterUp({ start, end, time, size, weight }) {
  const [number, setNumber] = useState(start);
  useEffect(() => {
    if (number < end) {
      const timer = setTimeout(() => {
        setNumber((prevNumber) => prevNumber + 1);
      }, time);
      return () => clearTimeout(timer);
    }
  }, [number, end, time]);
  useEffect(() => {
    setNumber(start);
  }, [start]);
  return (
    <div style={{ fontSize: `${size}rem`, fontWeight: `${weight}` }}>
      {number}
    </div>
  );
}
export function CounterDown({ start, end, time, size }) {
  const [number, setNumber] = useState(start);
  useEffect(() => {
    if (number > end) {
      const timer = setTimeout(() => {
        setNumber((prevNumber) => prevNumber - 1);
      }, time * 1000);
      return () => clearTimeout(timer);
    }
  }, [number, end, time]);
  useEffect(() => {
    setNumber(start);
  }, [start]);
  return <div style={{ fontSize: `${size}rem` }}>{number}</div>;
}
export function ModernBtn({
  title,
  allColor,
  fontSize,
  color,
  hoverColor,
  clickEvent,
  h = "4",
  w = "11",
}) {
  let handleClick = () => {
    if (typeof clickEvent === "function") {
      clickEvent();
    }
  };
  return (
    <>
      <style jsx>{`
        .animated-button {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.2rem;
          padding: 1rem 2rem;
          border: 4px solid transparent;
          font-size: ${fontSize}rem;
          background-color: inherit;
          border-radius: 100px;
          font-weight: 600;
          color: ${color};
          box-shadow: 0 0 0 2px ${allColor};
          cursor: pointer;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          height: ${h}rem;
          min-width: ${w}rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.3rem;
        }
        .animated-button svg {
          position: absolute;
          width: 1.5rem;
          fill: ${allColor};
          z-index: 9;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .animated-button .arr-1 {
          right: 16px;
        }
        .animated-button .arr-2 {
          left: -25%;
        }
        .animated-button .circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 1.1rem;
          height: 1.1rem;
          background-color: ${allColor};
          border-radius: 50%;
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .animated-button .text {
          position: relative;
          z-index: 1;
          transform: translateX(-12px);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .animated-button:hover {
          box-shadow: 0 0 0 12px transparent;
          color: ${hoverColor};
          border-radius: 12px;
        }
        .animated-button:hover .arr-1 {
          right: -25%;
        }
        .animated-button:hover .arr-2 {
          left: 1rem;
        }
        .animated-button:hover .text {
          transform: translateX(12px);
        }
        .animated-button:hover svg {
          fill: #212121;
        }
        .animated-button:active {
          transform: scale(0.95);
          box-shadow: 0 0 0 4px ${allColor};
        }
        .animated-button:hover .circle {
          width: 13.75rem;
          height: 13.75rem;
          opacity: 1;
        }
      `}</style>
      <button
        role="button"
        aria-label="button"
        onClick={handleClick}
        className="animated-button"
      >
        <svg
          viewBox="0 0 24 24"
          className="arr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
        <span className="text">{title}</span>
        <span className="circle" />
        <svg
          viewBox="0 0 24 24"
          className="arr-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
      </button>
    </>
  );
}
export function SwitchCase({ w, h }) {
  return (
    <>
      <style jsx>{`
        .toggler {
          width: 3rem;
          margin: 40px auto;
        }
        .toggler input {
          display: none;
        }
        .toggler label {
          display: block;
          position: relative;
          width: ${w}rem;
          height: ${h}rem;
          border: 1px solid #d6d6d6;
          border-radius: 36px;
          background: #e4e8e8;
          cursor: pointer;
        }
        .toggler label::after {
          display: block;
          border-radius: 100%;
          background-color: #d7062a;
          content: "";
          animation-name: toggler-size;
          animation-duration: 0.15s;
          animation-timing-function: ease-out;
          animation-direction: forwards;
          animation-iteration-count: 1;
          animation-play-state: running;
        }
        .toggler label::after,
        .toggler label .toggler-on,
        .toggler label .toggler-off {
          position: absolute;
          top: 50%;
          left: 25%;
          width: 26px;
          height: 26px;
          transform: translateY(-50%) translateX(-50%);
          transition: left 0.15s ease-in-out, background-color 0.2s ease-out,
            width 0.15s ease-in-out, height 0.15s ease-in-out,
            opacity 0.15s ease-in-out;
        }
        .toggler input:checked + label::after,
        .toggler input:checked + label .toggler-on,
        .toggler input:checked + label .toggler-off {
          left: 75%;
        }
        .toggler input:checked + label::after {
          background-color: #50ac5d;
          animation-name: toggler-size2;
        }
        .toggler .toggler-on,
        .toggler .toggler-off {
          opacity: 1;
          z-index: 2;
        }
        .toggler input:checked + label .toggler-off,
        .toggler input:not(:checked) + label .toggler-on {
          width: 0;
          height: 0;
          opacity: 0;
        }
        .toggler .path {
          fill: none;
          stroke: #fefefe;
          stroke-width: 7px;
          stroke-linecap: round;
          stroke-miterlimit: 10;
        }
        @keyframes toggler-size {
          0%,
          100% {
            width: 1.5rem;
            height: 1.5rem;
          }
          50% {
            width: 0.75rem;
            height: 0.75rem;
          }
        }
        @keyframes toggler-size2 {
          0%,
          100% {
            width: 1.5rem;
            height: 1.5rme;
          }
          50% {
            width: 0.75rem;
            height: 0.75rem;
          }
        }
      `}</style>
      <div className="toggler">
        <input
          id="toggler-1"
          name="toggler-1"
          type="checkbox"
          defaultValue={1}
        />
        <label htmlFor="toggler-1">
          <svg
            className="toggler-on"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 130.2 130.2"
          >
            <polyline
              className="path check"
              points="100.2,40.2 51.5,88.8 29.8,67.5"
            />
          </svg>
          <svg
            className="toggler-off"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 130.2 130.2"
          >
            <line
              className="path line"
              x1="34.4"
              y1="34.4"
              x2="95.8"
              y2="95.8"
            />
            <line
              className="path line"
              x1="95.8"
              y1="34.4"
              x2="34.4"
              y2="95.8"
            />
          </svg>
        </label>
      </div>
    </>
  );
}
export function Loader() {
  return (
    <>
      <style jsx>{`
        /* Assuming base font size of 16px, so 1rem = 16px */
        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .loading-wide {
          width: 17.375rem;
          height: 17.375rem;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .color {
          background-color: #3395ff;
        }
        .l1 {
          width: 0.9375rem; /* 15px / 16px */
          height: 4.0625rem; /* 65px / 16px */
          position: absolute;
          animation: move-h 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
        }
        .l2 {
          width: 0.9375rem; /* 15px / 16px */
          height: 3.75rem; /* 60px / 16px */
          position: absolute;
          transform: rotate(90deg);
          animation: move-v 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
        }
        @keyframes move-h {
          0% {
            top: 0;
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          50% {
            top: 30%;
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        @keyframes move-v {
          0% {
            left: 0;
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          50% {
            left: 45%;
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
        .animation-effect-light {
          animation: effect 0.2s 0.1s infinite linear;
        }
        .animation-effect-light-d {
          animation: effect 0.3s 0.2s infinite linear;
        }
        .animation-effect-rot {
          animation: rot 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
        }
        .animation-effect-scale {
          animation: scale 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
        }
        @keyframes effect {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        @keyframes rot {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes scale {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.9);
          }
          100% {
            transform: scale(1);
          }
        }
        .e1 {
          width: 0.0625rem; /* 1px / 16px */
          height: 2.5rem; /* 40px / 16px */
          opacity: 0.3;
          position: absolute;
          top: 0;
          left: 0.5rem; /* 8px / 16px */
        }
        .e2 {
          width: 3.75rem; /* 60px / 16px */
          height: 0.0625rem; /* 1px / 16px */
          opacity: 0.8;
          position: absolute;
          top: 0.5rem; /* 8px / 16px */
          left: 0;
        }
        .e3 {
          position: absolute;
          top: 0.625rem; /* 10px / 16px */
          left: 0.75rem; /* 12px / 16px */
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 900;
          font-size: 1.125rem; /* 18px / 16px */
          color: #3395ff;
        }
        .e4 {
          width: 0.0625rem; /* 1px / 16px */
          height: 2.5rem; /* 40px / 16px */
          opacity: 0.3;
          position: absolute;
          top: 5.625rem; /* 90px / 16px */
          right: 0.625rem; /* 10px / 16px */
        }
        .e5 {
          width: 2.5rem; /* 40px / 16px */
          height: 0.0625rem; /* 1px / 16px */
          opacity: 0.3;
          position: absolute;
          top: 6.25rem; /* 100px / 16px */
          right: 0;
        }
        .e6 {
          position: absolute;
          top: 6.25rem; /* 100px / 16px */
          right: 0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          font-size: 2rem; /* 32px / 16px */
          color: #3395ff;
        }
        .e7 {
          width: 0.0625rem; /* 1px / 16px */
          height: 1.25rem; /* 20px / 16px */
          position: absolute;
          bottom: 0;
          left: 0;
          transform: rotate(45deg);
          animation: height 1s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
        }
        @keyframes height {
          0% {
            bottom: 0%;
            left: 0%;
            height: 0;
          }
          25% {
            height: 5.625rem; /* 90px / 16px */
          }
          50% {
            bottom: 100%;
            left: 100%;
            height: 5.625rem; /* 90px / 16px */
          }
          75% {
            height: 0;
          }
          100% {
            bottom: 0%;
            left: 0%;
            height: 0;
          }
        }
        .e8 {
          width: 1.25rem; /* 20px / 16px */
          height: 0.0625rem; /* 1px / 16px */
          position: absolute;
          bottom: 50%;
          left: 0;
          animation: width 1.5s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
        }
        @keyframes width {
          0% {
            left: 0%;
            width: 0;
          }
          50% {
            left: 100%;
            width: 5.625rem; /* 90px / 16px */
          }
          100% {
            left: 0%;
            width: 0;
          }
        }
      `}</style>
      <div className="loading">
        <div className="loading-wide">
          <div className="l1 color" />
          <div className="l2 color" />
          <div className="e1 color animation-effect-light" />
          <div className="e2 color animation-effect-light-d" />
          <div className="e3 animation-effect-rot">X</div>
          <div className="e4 color animation-effect-light" />
          <div className="e5 color animation-effect-light-d" />
          <div className="e6 animation-effect-scale">*</div>
          <div className="e7 color" />
          <div className="e8 color" />
        </div>
      </div>
    </>
  );
}
export function LaRoseText({
  edit = {},
  children,
  fontSize = 2,
  fontWeight = 600,
  gradientText = "linear-gradient(45deg, #ff007f, #ff00ff, #ff1493, #ff69b4, #ff69b4, #ff1493, #ff00ff, #ff007f)",
}) {
  let LaRoseText = {
    ...edit,
  };
  return (
    <>
      <style jsx>{`
        .title {
          font-size: ${fontSize}rem;
          font-weight: ${fontWeight};
          background: ${gradientText};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      `}</style>
      <div style={LaRoseText} className="title">
        {children}
      </div>
    </>
  );
}
export function RoseBox({
  children,
  edit = {},
  background = "",
  RoseName = "",
  RoseID = "",
  autoLayout = false,
  shadow = false,
  shadowColor = "black",
  aspectRatio = null,
  atHover = false,
  grid = false,
  flex = false,
  scaleAnimate = false,
  childrenVisible = true,
  onClick,
  ariaLabel,
  role,
  lazy = false,
  AutoHandling = false,
  outlineOffset = 0,
}) {
  const [isLoaded, setIsLoaded] = useState(!lazy);
  useEffect(() => {
    if (lazy) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [lazy]);
  const layoutStyle = autoLayout
    ? { padding: "0.8rem", margin: "0 auto", overflow: "hidden" }
    : {};
  const shadowStyle = shadow
    ? { boxShadow: `0px 0px 9px 1px ${shadowColor}` }
    : {};
  const aspectStyle = aspectRatio ? { aspectRatio } : {};
  const displayLayoutStyle = grid
    ? {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
      }
    : flex
    ? { display: "flex", justifyContent: "space-between", alignItems: "center" }
    : {};
  const backgroundStyle = background ? { background } : {};
  const autoHandleStyle = AutoHandling
    ? {
        background: "#1b85db",
        height: "3rem",
        minWidth: "11rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #1b85db",
        borderRadius: "7px",
        fontWeight: "bold",
        boxShadow:
          "#1b85db 0px 50px 100px -20px, #1b85db 0px 30px 60px -30px, #1b85db 0px -2px 6px 0px inset",
        outlineOffset: `${outlineOffset}`,
        outlineStyle: "solid",
        outlineColor: "#1b85db",
        outlineWidth: "2px",
        cursor: "pointer",
      }
    : {};
  const hoverClass = atHover ? "rosebox-hover" : "";
  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick();
    }
  };
  return (
    <>
      <style jsx>{`
        .rosebox-hover {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
            background-color 0.3s ease-in-out;
        }
        .rosebox-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          background-color: rgba(240, 240, 240, 0.8);
        }
        .rosebox-scale-animate {
          animation: scale-down 0.6s ease-out forwards;
        }
        @keyframes scale-down {
          0% {
            transform: scale(2);
          }
          100% {
            transform: scale(0.9);
          }
        }
      `}</style>
      {childrenVisible && (
        <div
          aria-label={ariaLabel}
          role={role}
          onClick={handleClick}
          id={RoseID}
          className={`${RoseName} ${hoverClass} ${
            scaleAnimate ? "rosebox-scale-animate" : ""
          }`}
          style={{
            ...edit,
            ...layoutStyle,
            ...shadowStyle,
            ...aspectStyle,
            ...displayLayoutStyle,
            ...backgroundStyle,
            ...autoHandleStyle,
          }}
        >
          {isLoaded ? children : <div>Loading...</div>}
        </div>
      )}
    </>
  );
}
export function SplitText({
  children,
  RoseName,
  RoseId,
  initialAnimateTypeStyle = "character",
  edit = {},
  speed = 0.5,
  delay = 0.05,
}) {
  const [animateTypeStyle, setAnimateTypeStyle] = useState(
    initialAnimateTypeStyle
  );
  useEffect(() => {
    const fullAnimationDuration =
      speed + delay * (children.split("").length || 1);
    const timer = setTimeout(() => {
      setAnimateTypeStyle("word");
    }, fullAnimationDuration * 1000);
    return () => clearTimeout(timer);
  }, [speed, delay, children]);
  const splitText =
    animateTypeStyle === "word" ? children.split(/(\s+)/) : children.split("");
  const animatedText = splitText.map((item, index) => (
    <span
      key={index}
      className="SplitTextItem"
      style={{ "--SplitTextItem-index": index }}
    >
      {item === " " ? "\u00A0" : item}
    </span>
  ));
  return (
    <>
      <style jsx>{`
        .SplitTextItem {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: splitAnimation ${speed}s forwards;
          animation-delay: calc(var(--SplitTextItem-index) * ${delay}s);
        }
        @keyframes splitAnimation {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div style={{ ...edit }} id={RoseId} className={RoseName}>
        {animatedText}
      </div>
    </>
  );
}
export function ShinyText({
  children,
  RoseName,
  RoseId,
  edit = {},
  speed = 2,
  color = "#fff",
  backgroundColor = "#000",
  onClick,
}) {
  let onClickFun = () => {
    if (typeof onClick === "function") {
      onClick();
    }
  };
  return (
    <>
      <style jsx>{`
        .shiny-text {
          position: relative;
          display: inline-block;
          color: ${color};
          background-color: ${backgroundColor};
          overflow: hidden;
          font-weight: bold;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        .shiny-text::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          height: 100%;
          width: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.7),
            transparent
          );
          transform: skewX(-15deg);
        }
        .shiny-text::before {
          animation: shiny-effect ${speed}s infinite;
        }
        @keyframes shiny-effect {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
      <div
        onClick={onClickFun}
        style={{ ...edit }}
        id={RoseId}
        className={`shiny-text ${RoseName}`}
      >
        {children}
      </div>
    </>
  );
}
export function ShinyButton({
  children,
  RoseName,
  RoseId,
  edit = {},
  speed = 2,
  color = "#fff",
  backgroundColor = "#111",
  padding = "10px 20px",
  borderRadius = "5px",
  onClick,
}) {
  let onClickFun = () => {
    if (typeof onClick === "function") {
      onClick();
    }
  };
  return (
    <>
      <style jsx>{`
        .shiny-button {
          position: relative;
          display: inline-block;
          padding: ${padding};
          background-color: ${backgroundColor};
          color: ${color};
          font-weight: bold;
          text-transform: uppercase;
          overflow: hidden;
          border-radius: ${borderRadius};
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
          ursor: pointer;
          border: 1px solid #353535;
          padding: 0.4em 1.2em;
          border-radius: 50px;
          transition: 0.3s ease;
        }
        .shiny-button::before {
          content: "";
          position: absolute;
          top: -100%;
          left: -100%;
          height: 100%;
          width: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.7),
            transparent
          );
          transform: skewX(-15deg);
          transition: opacity 0.3s;
        }
        .shiny-button:hover::before {
          animation: shiny-effect ${speed}s infinite;
          opacity: 1;
        }
        .shiny-button:hover {
          background-color: ${backgroundColor};
          color: ${color};
        }
        @keyframes shiny-effect {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
      <button
        role="button"
        aria-label="button"
        onClick={onClickFun}
        style={{ ...edit }}
        id={RoseId}
        className={`shiny-button ${RoseName}`}
      >
        {children}
      </button>
    </>
  );
}
export function WaveText({
  children,
  RoseName,
  RoseId,
  initialWaveType = "character",
  edit = {},
  speed = 0.5,
  delay = 0.05,
  amplitude = 10,
  frequency = 0.5,
}) {
  const [waveType, setWaveType] = useState(initialWaveType);
  useEffect(() => {
    const totalAnimationDuration =
      speed + delay * (children.split("").length || 1);
    const timer = setTimeout(() => {
      setWaveType("word");
    }, totalAnimationDuration * 1000 + 200);
    return () => clearTimeout(timer);
  }, [speed, delay, children]);
  const splitText =
    waveType === "word" ? children.split(/(\s+)/) : children.split("");
  const waveText = splitText.map((item, index) => (
    <span
      key={index}
      className="WaveTextItem"
      style={{ "--WaveTextItem-index": index }}
    >
      {item === " " ? "\u00A0" : item}
    </span>
  ));
  return (
    <>
      <style jsx>{`
        .WaveTextItem {
          display: inline-block;
          opacity: 0;
          transform: translateY(${amplitude}px);
          animation: waveAnimation ${speed}s forwards;
          animation-delay: calc(var(--WaveTextItem-index) * ${delay}s);
        }
        @keyframes waveAnimation {
          0% {
            opacity: 0;
            transform: translateY(${amplitude}px);
          }
          50% {
            opacity: 1;
            transform: translateY(-${amplitude}px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div style={{ ...edit }} id={RoseId} className={RoseName}>
        {waveText}
      </div>
    </>
  );
}
export function AnimatedText({
  children,
  RoseName,
  RoseId,
  edit = {},
  speed = 0.5,
  delay = 0.05,
  animationType = "blur",
  initialAnimateTypeStyle = "character",
}) {
  const [animateTypeStyle, setAnimateTypeStyle] = useState(
    initialAnimateTypeStyle
  );
  useEffect(() => {
    const totalAnimationDuration =
      speed + delay * (children.split("").length || 1);
    const timer = setTimeout(() => {
      setAnimateTypeStyle("word");
    }, totalAnimationDuration * 1000 + 600);
    return () => clearTimeout(timer);
  }, [speed, delay, children]);
  const splitText =
    animateTypeStyle === "word" ? children.split(/(\s+)/) : children.split("");

  const animatedText = splitText.map((item, index) => (
    <span
      key={index}
      className="AnimatedTextItem"
      style={{ "--AnimatedTextItem-index": index }}
    >
      {item === " " ? "\u00A0" : item}
      {animateTypeStyle === "word" && item === " " && " "}
    </span>
  ));
  const animations = {
    blur: `
          filter: blur(15px);
          animation: blurAnimation ${speed}s forwards;
      `,
    fadeIn: `
          opacity: 0;
          animation: fadeInAnimation ${speed}s forwards;
      `,
    slideIn: `
          transform: translateX(-20px);
          opacity: 0;
          animation: slideInAnimation ${speed}s forwards;
      `,
    zoomIn: `
          transform: scale(0.5);
          opacity: 0;
          animation: zoomInAnimation ${speed}s forwards;
      `,
  };
  const selectedAnimation = animations[animationType] || animations.blur;
  return (
    <>
      <style jsx>{`
        .AnimatedTextItem {
          display: inline-block;
          ${selectedAnimation}
          animation-delay: calc(var(--AnimatedTextItem-index) * ${delay}s);
        }
        @keyframes blurAnimation {
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        @keyframes fadeInAnimation {
          to {
            opacity: 1;
          }
        }
        @keyframes slideInAnimation {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes zoomInAnimation {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
      <div style={{ ...edit }} id={RoseId} className={RoseName}>
        {animatedText}
      </div>
    </>
  );
}
const RouterContext = createContext();
export const useRouter = () => useContext(RouterContext);
export const RoseRouter = ({ children, customStyles = "" }) => {
  const [route, setRoute] = useState(window.location.pathname);
  const navigate = (path) => {
    if (path !== route) {
      setRoute(path);
      window.history.pushState({}, "", path);
    }
  };
  useEffect(() => {
    const handlePopState = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);
  return (
    <>
      <style jsx>{`
        .route {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .route-active {
          opacity: 1;
          transform: translateY(0);
        }
        ${customStyles}
      `}</style>
      <RouterContext.Provider value={{ route, navigate }}>
        {children}
      </RouterContext.Provider>
    </>
  );
};
export const Route = ({ path, element }) => {
  const { route } = useRouter();
  return (
    <div className={`route ${route === path ? "route-active" : ""}`}>
      {route === path ? element : null}
    </div>
  );
};
export const RoseParent = ({
  children,
  edit,
  RoseID,
  RoseName,
  display = "flex",
  flexDirection = "row",
  flexDirectionMobile = "column",
  justifyContent = "space-around",
  alignItems = "center",
  alignContent = "center",
  flexWrap = "wrap",
  gap = "1rem",
  padding = "1rem",
  minHeight = "100vh",
  width = "100%",
  flexBasis = "auto",
  flexGrow = "1",
  flexShrink = "1",
  gridTemplateColumns = "",
  gridTemplateRows = "",
  gridColumnGap = "",
  gridRowGap = "",
  placeItems = "center",
  alignContentGrid = "",
  justifyItems = "",
  gridAutoFlow = "",
  gridAutoColumns = "",
  gridAutoRows = "",
  gridTemplateAreas = "",
  alignSelf = "",
  justifySelf = "",
  gridArea = "",
}) => {
  const isGrid = display === "grid";
  return (
    <>
      <style jsx>{`
        .rose-parent {
          display: ${display};
          ${isGrid
            ? `
                        grid-template-columns: ${gridTemplateColumns};
                        grid-template-rows: ${gridTemplateRows};
                        grid-column-gap: ${gridColumnGap};
                        grid-row-gap: ${gridRowGap};
                        place-items: ${placeItems};
                        align-content: ${alignContentGrid};
                        justify-items: ${justifyItems};
                        grid-auto-flow: ${gridAutoFlow};
                        grid-auto-columns: ${gridAutoColumns};
                        grid-auto-rows: ${gridAutoRows};
                        grid-template-areas: ${gridTemplateAreas};
                    `
            : `
                        flex-direction: ${flexDirection};
                        justify-content: ${justifyContent};
                        align-items: ${alignItems};
                        align-content: ${alignContent};
                        flex-wrap: ${flexWrap};
                        gap: ${gap};
                    `}
          padding: ${padding};
          box-sizing: border-box;
          width: ${width};
          min-height: ${minHeight};
        }
        .rose-parent > * {
          flex-basis: ${flexBasis};
          flex-grow: ${flexGrow};
          flex-shrink: ${flexShrink};
          align-self: ${alignSelf};
          justify-self: ${justifySelf};
          grid-area: ${gridArea};
        }
        @media (min-width: 768px) {
          .rose-parent {
            flex-direction: row;
            justify-content: space-between;
          }
        }
        @media (max-width: 767px) {
          .rose-parent {
            flex-direction: ${flexDirectionMobile};
            align-items: center;
          }
        }
      `}</style>
      <div id={RoseID} className={`rose-parent ${RoseName}`} style={edit}>
        {children}
      </div>
    </>
  );
};
export const Table = ({ data, columns, edit, RoseID, RoseName }) => (
  <table style={edit} className={RoseName} id={RoseID}>
    <thead>
      <tr>
        {columns.map((col, index) => (
          <th key={index}>{col.header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((col, colIndex) => (
            <td key={colIndex}>{row[col.accessor]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
export function Notification({
  children,
  edit = {},
  RoseID,
  icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      strokeWidth={0}
      fill="currentColor"
      stroke="currentColor"
      className="icon"
    >
      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
    </svg>
  ),
  RoseName = "card",
  Message = "Hello LaRose Devs",
  MessageColor = "white",
  DesMessage = "success",
  DesMessageColor = "white",
  editCrossIconHeight = 1.5,
  editCrossIconWidth = 1.5,
  iconDisplay = "block",
  CrossIconColor = "black",
  editCrossIconColor = {},
  delay = 5000,
}) {
  const [valueState, setValueState] = useState(false);
  const removeNote = () => {
    setValueState(true);
  };
  useEffect(() => {
    if (delay !== Infinity) {
      const timer = setTimeout(() => {
        setValueState(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);
  return (
    <>
      <style jsx>{`
        .${RoseName} {
          width: 20.625rem;
          height: 5rem;
          border-radius: 0.5rem;
          box-sizing: border-box;
          padding: 0.625rem 0.9375rem;
          background-color: #ffffff;
          box-shadow: rgba(149, 157, 165, 0.2) 0 0.5rem 1.5rem;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 0.9375rem;
        }
        .wave {
          position: absolute;
          transform: rotate(90deg);
          left: -1.9375rem;
          top: 2rem;
          width: 5rem;
          fill: #04e4003a;
        }
        .icon-container {
          width: 2.1875rem;
          height: 2.1875rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #04e40048;
          border-radius: 50%;
          margin-left: 0.5rem;
          display: ${iconDisplay};
        }
        .icon {
          width: 1.0625rem;
          height: 1.0625rem;
          color: #269b24;
        }
        .message-text-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          flex-grow: 1;
        }
        .message-text,
        .sub-text {
          margin: 0;
          cursor: default;
        }
        .message-text {
          color: ${MessageColor};
          font-size: 1.0625rem;
          font-weight: 700;
        }
        .sub-text {
          font-size: 0.875rem;
          color: ${DesMessageColor};
        }
        .cross-icon {
          width: ${editCrossIconHeight}rem;
          height: ${editCrossIconWidth}rem;
          color: ${CrossIconColor};
          cursor: pointer;
        }
      `}</style>
      <div
        style={{
          display: valueState ? "none" : "flex",
          ...edit,
        }}
        id={RoseID}
        className={RoseName}
      >
        <svg
          className="wave"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
            fillOpacity={1}
          />
        </svg>
        <div className="icon-container">{icon}</div>
        <div className="message-text-container">
          <p className="message-text">{Message}</p>
          <p className="sub-text">{DesMessage}</p>
        </div>
        <svg
          onClick={removeNote}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 15"
          strokeWidth={0}
          fill="none"
          stroke="currentColor"
          className="cross-icon"
        >
          <path
            fill="currentColor"
            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
            clipRule="evenodd"
            fillRule="evenodd"
          />
        </svg>
        {children}
      </div>
    </>
  );
}
export function Spring({
  rotate = 360,
  scale = 1,
  speed = 0.8,
  x = "0",
  y = "0",
  z = "0",
  children,
  RoseID,
  RoseName = "RotatingSpringComponentStyle",
  edit,
  drag = false,
}) {
  const elementRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isDragged, setIsDragged] = useState(false);
  const [startOffset, setStartOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setPosition({ x: rect.left, y: rect.top });
    }
  }, []);
  const handleMouseDown = (e) => {
    if (drag) {
      const rect = e.target.getBoundingClientRect();
      setStartOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
      setIsDragged(true);
    }
  };
  const handleMouseMove = (e) => {
    if (isDragging && drag) {
      setPosition({
        x: e.clientX - startOffset.x,
        y: e.clientY - startOffset.y,
      });
    }
  };
  const handleMouseUp = () => {
    if (drag) {
      setIsDragging(false);
    }
  };
  return (
    <>
      <style jsx>{`
        .${RoseName} {
          min-height: 7rem;
          width: 7rem;
          background: #ffffff;
          border-radius: 26px;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: LaRoseRotatingAnimated ${speed}s ease-in-out forwards;
          transform: rotate(0deg) scale(0);
          opacity: 0;
          overflow: hidden;
          translate: ${x} ${y} ${z};
          position: relative; /* Default position */
          cursor: ${drag ? "grab" : "default"};
        }
        .${RoseName}:active {
          cursor: ${drag ? "grabbing" : "default"};
        }
        @keyframes LaRoseRotatingAnimated {
          to {
            translate: ${x} ${y} ${z};
            transform: rotate(${rotate}deg) scale(${scale});
            opacity: 1;
          }
        }
      `}</style>
      <div
        ref={elementRef}
        style={{
          ...edit,
          left: isDragged ? `${position.x}px` : "auto",
          top: isDragged ? `${position.y}px` : "auto",
          position: isDragged ? "absolute" : "relative",
        }}
        className={RoseName}
        id={RoseID}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {children}
      </div>
    </>
  );
}
export function Variants({
  rotate = 0,
  scale = 1,
  speed = 0.8,
  x = "0",
  y = "0",
  z = "0",
  children,
  RoseID,
  RoseName = "RotatingVariantsComponentStyle",
  edit,
  childDisplay = "grid",
  drag = false,
}) {
  const elementRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isDragged, setIsDragged] = useState(false);
  const [startOffset, setStartOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setPosition({ x: rect.left, y: rect.top });
    }
  }, []);
  const handleMouseDown = (e) => {
    if (drag) {
      const rect = e.target.getBoundingClientRect();
      setStartOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
      setIsDragged(true);
    }
  };
  const handleMouseMove = (e) => {
    if (isDragging && drag) {
      setPosition({
        x: e.clientX - startOffset.x,
        y: e.clientY - startOffset.y,
      });
    }
  };
  const handleMouseUp = () => {
    if (drag) {
      setIsDragging(false);
    }
  };
  return (
    <>
      <style jsx>{`
        .${RoseName} {
          min-height: 7rem;
          width: 7rem;
          background: #380eff;
          border-radius: 26px;
          display: grid;
          grid-template-columns: auto auto;
          grid-gap: 1rem;
          justify-content: center;
          align-items: center;
          animation: ${RoseName}Animated ${speed}s ease-in-out forwards;
          transform: rotate(${rotate}deg) scale(${scale});
          translate: ${x} ${y} ${z};
          opacity: 0;
          overflow: hidden;
          position: relative; /* Default position */
          cursor: ${drag ? "grab" : "default"};
        }
        .${RoseName}:active {
          cursor: ${drag ? "grabbing" : "default"};
        }
        @keyframes ${RoseName}Animated {
          to {
            translate: ${x} ${y} ${z};
            transform: rotate(${rotate}deg) scale(${scale});
            opacity: 1;
          }
        }
      `}</style>
      <div
        ref={elementRef}
        style={{
          ...edit,
          left: isDragged ? `${position.x}px` : "auto",
          top: isDragged ? `${position.y}px` : "auto",
          position: isDragged ? "absolute" : "relative",
        }}
        className={RoseName}
        id={RoseID}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {children}
        <SideText direction="left">
          {" "}
          <div
            style={{
              height: "2rem",
              width: "2rem",
              background: "#EEE",
              borderRadius: "50%",
              display: childDisplay,
            }}
          ></div>
        </SideText>
        <SideText direction="right">
          <div
            style={{
              height: "2rem",
              width: "2rem",
              background: "#EEE",
              borderRadius: "50%",
              display: childDisplay,
            }}
          ></div>
        </SideText>
        <SideText direction="left">
          <div
            style={{
              height: "2rem",
              width: "2rem",
              background: "#EEE",
              borderRadius: "50%",
              display: childDisplay,
            }}
          ></div>
        </SideText>
        <SideText direction="right">
          <div
            style={{
              height: "2rem",
              width: "2rem",
              background: "#EEE",
              borderRadius: "50%",
              display: childDisplay,
            }}
          ></div>
        </SideText>
      </div>
    </>
  );
}
export function RandomAnimate({
  children,
  RoseID,
  RoseName = "random-animate",
  edit = {
    backgroundColor: "#EEE",
    height: "12rem",
    width: "12rem",
    borderRadius: "20px",
    padding: "1rem",
  },
  AnimatedType,
}) {
  const [animationClass, setAnimationClass] = useState("");
  useEffect(() => {
    const animations = [
      "fadeIn",
      "slideInLeft",
      "zoomIn",
      "rotateIn",
      "bounceIn",
      "flipInX",
      "flipInY",
      "lightSpeedIn",
      "rollIn",
      "jackInTheBox",
    ];
    if (AnimatedType) {
      setAnimationClass(AnimatedType);
    } else {
      const randomAnimation =
        animations[Math.floor(Math.random() * animations.length)];
      setAnimationClass(randomAnimation);
    }
  }, [AnimatedType]);
  return (
    <>
      <style jsx>{`
        .random-animate {
          display: inline-block;
        }
        /* Add your keyframe animations here */
        /* Fade In Animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        /* Slide In Left Animation */
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .slideInLeft {
          animation: slideInLeft 1s ease-in-out;
        }
        /* Zoom In Animation */
        @keyframes zoomIn {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .zoomIn {
          animation: zoomIn 1s ease-in-out;
        }
        /* Rotate In Animation */
        @keyframes rotateIn {
          from {
            transform: rotate(-200deg);
            opacity: 0;
          }
          to {
            transform: rotate(0);
            opacity: 1;
          }
        }
        .rotateIn {
          animation: rotateIn 1s ease-in-out;
        }
        /* Bounce In Animation */
        @keyframes bounceIn {
          0%,
          20%,
          40%,
          60%,
          80%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .bounceIn {
          animation: bounceIn 1s ease-in-out;
        }
        /* Flip In X Animation */
        @keyframes flipInX {
          from {
            transform: perspective(400px) rotateX(90deg);
            opacity: 0;
          }
          to {
            transform: perspective(400px) rotateX(0deg);
            opacity: 1;
          }
        }
        .flipInX {
          animation: flipInX 1s ease-in-out;
        }
        /* Flip In Y Animation */
        @keyframes flipInY {
          from {
            transform: perspective(400px) rotateY(90deg);
            opacity: 0;
          }
          to {
            transform: perspective(400px) rotateY(0deg);
            opacity: 1;
          }
        }
        .flipInY {
          animation: flipInY 1s ease-in-out;
        }
        /* Light Speed In Animation */
        @keyframes lightSpeedIn {
          from {
            transform: translateX(100%) skewX(-30deg);
            opacity: 0;
          }
          to {
            transform: translateX(0) skewX(0deg);
            opacity: 1;
          }
        }
        .lightSpeedIn {
          animation: lightSpeedIn 1s ease-out;
        }
        /* Roll In Animation */
        @keyframes rollIn {
          from {
            transform: translateX(-100%) rotate(-120deg);
            opacity: 0;
          }
          to {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
        }
        .rollIn {
          animation: rollIn 1s ease-in-out;
        }
        /* Jack In The Box Animation */
        @keyframes jackInTheBox {
          from {
            opacity: 0;
            transform: scale(0.1) rotate(30deg);
          }
          50% {
            transform: rotate(-10deg);
          }
          70% {
            transform: rotate(3deg);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .jackInTheBox {
          animation: jackInTheBox 1s ease-in-out;
        }
      `}</style>
      <div id={RoseID} style={edit} className={`${RoseName} ${animationClass}`}>
        {children}
      </div>
    </>
  );
}
export function SideText({
  children,
  RoseID,
  RoseName = "side-textAnimatedLarose",
  edit = {},
  direction = "left",
}) {
  const animationDirection =
    direction === "right" ? "sideTextRight" : "sideTextLeft";
  return (
    <>
      <style jsx>{`
        .side-text {
          display: inline-block;
        }
        /* SideTextLeft Animation */
        @keyframes sideTextLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        /* SideTextRight Animation */
        @keyframes sideTextRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .sideTextLeft {
          animation: sideTextLeft 1s ease-in-out;
        }
        .sideTextRight {
          animation: sideTextRight 1s ease-in-out;
        }
      `}</style>
      <div
        id={RoseID}
        style={edit}
        className={`${RoseName} ${animationDirection}`}
      >
        {children}
      </div>
    </>
  );
}
export function useClipboard() {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return [copied, copyToClipboard];
}
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue];
}
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
}
export function useRand(from, to) {
  const getRandomValue = () =>
    Math.floor(Math.random() * (to - from + 1)) + from;
  const [RandValue, setRandValue] = useState(getRandomValue());
  const refreshRandValue = () => {
    setRandValue(getRandomValue());
  };
  return [RandValue, refreshRandValue];
}
export function SeeMore({
  children,
  maxCharacters = 100,
  maxElements = 3,
  edit,
  RoseName,
  RoseId,
  editButton = {},
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef(null);
  const text =
    typeof children === "string" ? children : children?.props?.children;
  const toggleExpand = () => setIsExpanded(!isExpanded);
  const childrenArray = React.Children.toArray(children);
  let truncatedText = text;
  if (text && text.length > maxCharacters && !isExpanded) {
    truncatedText = text.slice(0, maxCharacters) + "...";
  }
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, maxElements);
  const hasMoreContent =
    text?.length > maxCharacters || childrenArray.length > maxElements;
  return (
    <div
      style={{ ...edit, overflow: "hidden", transition: "height 0.5s ease" }}
      className={RoseName}
      id={RoseId}
    >
      <div ref={textRef} className="content">
        {/* Render either text or elements based on the content type */}
        {typeof children === "string" ? truncatedText : visibleChildren}
      </div>
      {hasMoreContent && (
        <button
          role="button"
          aria-label="button"
          style={{
            background: "none",
            border: "none",
            fontWeight: "bold",
            color: "blue",
            ...editButton,
          }}
          onClick={toggleExpand}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}
export function SideBox({
  children,
  direction = "left",
  edit = {},
  RoseID,
  RoseName,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (boxRef.current) {
        const boxRect = boxRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if (
          boxRect.top <= viewportHeight &&
          boxRect.bottom >= 0 &&
          boxRect.left <= window.innerWidth &&
          boxRect.right >= 0
        ) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <style jsx>{`
        .sideboxComponent {
          transition: transform 0.5s ease, opacity 0.5s ease;
          opacity: 0;
          z-index: 1000;
          position: fixed;
        }
        .sideboxComponent.visible {
          opacity: 1;
        }
        .sideboxComponent.left {
          left: 0;
          top: 50%;
          transform: translateX(-100%) translateY(-50%);
        }
        .sideboxComponent.right {
          right: 0;
          top: 50%;
          transform: translateX(100%) translateY(-50%);
        }
        .sideboxComponent.top {
          top: 0;
          left: 50%;
          transform: translateX(-50%) translateY(-100%);
        }
        .sideboxComponent.bottom {
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) translateY(100%);
        }
        .sideboxComponent.left.visible {
          transform: translateX(0) translateY(-50%);
        }
        .sideboxComponent.right.visible {
          transform: translateX(0) translateY(-50%);
        }
        .sideboxComponent.top.visible {
          transform: translateX(-50%) translateY(0);
        }
        .sideboxComponent.bottom.visible {
          transform: translateX(-50%) translateY(0);
        }
      `}</style>
      <div
        ref={boxRef}
        style={edit}
        id={RoseID}
        className={`sideboxComponent ${direction} ${
          isVisible ? "visible" : ""
        }`}
      >
        {RoseName && <h2>{RoseName}</h2>}
        {children}
      </div>
    </>
  );
}
export const useBatteryStatus = () => {
  const [batteryInfo, setBatteryInfo] = useState({
    level: null,
    charging: null,
  });
  useEffect(() => {
    if ("getBattery" in navigator) {
      navigator.getBattery().then((battery) => {
        setBatteryInfo({
          level: battery.level,
          charging: battery.charging,
        });
        const updateBatteryInfo = () => {
          setBatteryInfo({
            level: battery.level,
            charging: battery.charging,
          });
        };
        battery.addEventListener("levelchange", updateBatteryInfo);
        battery.addEventListener("chargingchange", updateBatteryInfo);
        return () => {
          battery.removeEventListener("levelchange", updateBatteryInfo);
          battery.removeEventListener("chargingchange", updateBatteryInfo);
        };
      });
    } else {
      console.log("Battery Status API is not supported in this browser.");
    }
  }, []);
  return batteryInfo;
};
export function usePreferredLanguage() {
  const [preferredLanguage, setPreferredLanguage] = useState("en");
  useEffect(() => {
    const language = navigator.language || navigator.userLanguage;
    setPreferredLanguage(language);
  }, []);
  return preferredLanguage;
}
export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState("light");
  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setColorScheme(e.matches ? "dark" : "light");
    };
    handleChange(matchMedia);
    matchMedia.addEventListener("change", handleChange);
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, []);
  return colorScheme;
}
export function useHardwareConcurrency() {
  const [coreCount, setCoreCount] = useState(1);
  useEffect(() => {
    if (navigator.hardwareConcurrency) {
      setCoreCount(navigator.hardwareConcurrency);
    }
  }, []);
  return coreCount;
}
export const getContinent = (latitude, longitude) => {
  if (latitude && longitude) {
    if (
      latitude >= -34 &&
      latitude <= 37 &&
      longitude >= -17 &&
      longitude <= 51
    ) {
      return "Africa";
    } else if (
      latitude >= 10 &&
      latitude <= 82 &&
      longitude >= 25 &&
      longitude <= 180
    ) {
      return "Asia";
    } else if (
      latitude >= 10 &&
      latitude <= 83 &&
      longitude >= -168 &&
      longitude <= -52
    ) {
      return "North America";
    } else if (
      latitude >= -56 &&
      latitude <= 13 &&
      longitude >= -93 &&
      longitude <= -32
    ) {
      return "South America";
    } else if (
      latitude >= -48 &&
      latitude <= -12 &&
      longitude >= 110 &&
      longitude <= 180
    ) {
      return "Australia";
    } else if (
      latitude >= 35 &&
      latitude <= 72 &&
      longitude >= -25 &&
      longitude <= 45
    ) {
      return "Europe";
    } else if (latitude >= -90 && latitude <= -60) {
      return "Antarctica";
    }
  }
  return "Unknown";
};
export const useContinentContent = () => {
  const [continent, setContinent] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userContinent = getContinent(latitude, longitude);
          setContinent(userContinent);
        },
        (error) => {
          console.error("Error getting location:", error);
          setContinent("Unknown");
        }
      );
    } else {
      setContinent("Unknown");
    }
  }, []);
  return { continent };
};
export const useUserCountry = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) {
          throw new Error("Failed to fetch country data");
        }
        const data = await response.json();
        setCountry(data.country_name);
      } catch (err) {
        console.error("Error fetching the user's country:", err);
        setError("Could not determine your country.");
      } finally {
        setLoading(false);
      }
    };
    fetchCountry();
  }, []);
  return { country, loading, error };
};
export const usePhotoCapture = () => {
  const [photo, setPhoto] = useState(null);
  const [cameraError, setCameraError] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play().catch((err) => {
              console.error("Error playing video:", err);
            });
          };
        }
      } catch (err) {
        console.error("Error accessing the camera: ", err);
        setCameraError(
          "Unable to access the camera. Please check your device settings."
        );
      }
    };
    startCamera();
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);
  const takePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (canvas && video) {
      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      setPhoto(canvas.toDataURL("image/png"));
    }
  };
  return { takePhoto, photo, videoRef, canvasRef, cameraError };
};
export const useGetContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const getContacts = async () => {
    try {
      if (!("contacts" in navigator && "ContactsManager" in window)) {
        throw new Error("Contacts API not supported on this device.");
      }
      const props = ["name", "email", "tel"];
      const opts = { multiple: true };
      setIsFetching(true);
      const contactList = await navigator.contacts.select(props, opts);
      setContacts(contactList);
      setIsFetching(false);
    } catch (err) {
      setError(err.message);
      setIsFetching(false);
    }
  };
  return { contacts, error, isFetching, getContacts };
};
export const SmoothParent = ({ children }) => {
  const parentRef = useRef(null);
  useEffect(() => {
    const childElements = parentRef.current?.children;
    if (childElements) {
      Array.from(childElements).forEach((child, index) => {
        child.style.opacity = 0;
        child.style.transform = "translateY(20px)";
        child.style.transition = `opacity 0.5s ease ${
          index * 0.2
        }s, transform 0.5s ease ${index * 0.2}s`;
        setTimeout(() => {
          child.style.opacity = 1;
          child.style.transform = "translateY(0)";
        }, 50);
      });
    }
  }, [children]);
  return (
    <>
      <style jsx>{`
        .smooth-parent {
          display: flex;
          flex-direction: column;
          gap: 20px; /* space between child elements */
        }
        .smooth-parent > * {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
      `}</style>
      <div className="smooth-parent" ref={parentRef}>
        {children}
      </div>
    </>
  );
};
export const SnakeMouse = ({
  color = "rgba(0, 150, 255, 0.8)",
  display = "block",
}) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const trailsRef = useRef([]);
  const maxTrailLength = 30;
  const numOfTrails = 8;
  const speedFactor = 0.35;
  let animationFrameId = useRef(null);
  useEffect(() => {
    trailsRef.current = Array.from({ length: numOfTrails }, () => []);
  }, []);
  const handleMouseMove = (event) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mousePosition = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    trailsRef.current.forEach((trail) => {
      const lastPosition = trail[trail.length - 1] || mousePosition;
      const interpolatedPosition = {
        x: lastPosition.x + (mousePosition.x - lastPosition.x) * speedFactor,
        y: lastPosition.y + (mousePosition.y - lastPosition.y) * speedFactor,
      };
      if (trail.length > maxTrailLength) {
        trail.shift();
      }
      trail.push(interpolatedPosition);
    });
  };
  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = ctxRef.current;
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    trailsRef.current.forEach((trail, index) => {
      ctx.strokeStyle = `rgba(0, 150, 255, ${0.8 - index * 0.1})`;
      ctx.lineWidth = 2.5 - index * 0.3;
      if (trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(trail[0].x, trail[0].y);
        for (let i = 1; i < trail.length; i++) {
          ctx.lineTo(trail[i].x, trail[i].y);
        }
        ctx.stroke();
      }
    });
    animationFrameId.current = requestAnimationFrame(draw);
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;
    draw();
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      style={{
        display: display,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        backgroundColor: "transparent",
      }}
    />
  );
};
export const ViewportContainer = ({
  children,
  threshold = 0.1,
  rootMargin = "0px",
  lazyLoad = false,
}) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(!lazyLoad);
  useEffect(() => {
    if (!lazyLoad) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (observer && containerRef.current) {
        observer.disconnect();
      }
    };
  }, [threshold, rootMargin, lazyLoad]);
  if (!isLoaded) return null;
  return <div ref={containerRef}>{children}</div>;
};
export const useViewportVisibility = (loadContentOnView = true) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInViewport);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ref.current]);
  return { ref, isVisible, loadContentOnView };
};
export default function TestManegar({ children }) {
  const [renderTime, setRenderTime] = useState(null);
  useEffect(() => {
    const startTime = performance.now();
    requestAnimationFrame(() => {
      const endTime = performance.now();
      setRenderTime(endTime - startTime);
    });
  }, [children]);
  return (
    <div>
      {children}
      {renderTime !== null && <p>Render time: {renderTime.toFixed(2)} ms</p>}
    </div>
  );
}
export const useRenderTime = () => {
  const [renderTime, setRenderTime] = useState(null);
  useEffect(() => {
    const startTime = performance.now();
    requestAnimationFrame(() => {
      const endTime = performance.now();
      setRenderTime(endTime - startTime);
    });
  }, []);
  return renderTime;
};
export const BlockUser = ({ blockUser, edit = {}, RoseId }) => {
  const [ip, setIp] = useState(null);
  const [isBlocked, setIsBlocked] = useState(false);
  const fetchUserIP = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIp(data.ip);
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  };
  useEffect(() => {
    fetchUserIP();
  }, []);
  useEffect(() => {
    if (blockUser && ip) {
      setIsBlocked(true);
      let randomNum = Math.random();
      window.open(`https://your-access-blocked/${randomNum}`, "_self");
    }
  }, [blockUser, ip]);
  if (isBlocked) {
    return (
      <>
        <style jsx>{`
          .userBlockComponentActionEvent {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            user-select: none;
            z-index: 9999999;
            height: 100%;
            font-weight: bold;
            font-weight: 4rem;
            background: black;
            width: 100%;
            color: red;
            overflow: hidden;
          }
          .userBlockComponentActionEventChildrenDiv {
            color: white;
            background: red;
            height: 4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40rem;
            border-radius: 10px;
          }
        `}</style>
        <div className="userBlockComponentActionEvent">
          <div
            id={RoseId}
            style={edit}
            className="userBlockComponentActionEventChildrenDiv"
          >
            Access Denied: You Are Blocked
          </div>
        </div>
      </>
    );
  }
};

export const Image = ({
  src,
  alt = "Image Tag",
  quality = 0.7,
  imageSize = false,
  requireSrc,
  height = 30,
  width = 30,
  edit = {},
  responsiveSrc = {},
  RoseName,
  RoseID,
  loading = false,
}) => {
  const [webpSrc, setWebpSrc] = useState(null);
  const [compressedSize, setCompressedSize] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadImage = async (imageSrc) => {
      const img = new window.Image(); // Accessing the global Image constructor correctly
      img.src = imageSrc;

      img.onload = () => {
        compressImage(img);
      };

      img.onerror = () => {
        setError(true);
      };
    };

    // Load from requireSrc prop if available, otherwise use src
    const imageSource = requireSrc || src;

    if (imageSource) {
      loadImage(imageSource);
    }
  }, [src, requireSrc]);

  const compressImage = (img) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = width || img.width;
    canvas.height = height || img.height;

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Set a new image type (webp) and quality
    const webpDataUrl = canvas.toDataURL("image/webp", quality);
    setWebpSrc(webpDataUrl);

    const webpSizeInBytes = Math.ceil((webpDataUrl.length * 3) / 4);
    const sizeInKB = (webpSizeInBytes / 1024).toFixed(2);
    setCompressedSize(sizeInKB);
  };

  return (
    <div>
      {!isLoaded && !error && loading && (
        <div
          style={{
            height,
            width,
            backgroundColor: "#f0f0f0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "14px",
            color: "#999",
          }}
        >
          Loading...
        </div>
      )}

      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        {responsiveSrc && (
          <source
            srcSet={responsiveSrc.srcSet}
            sizes={responsiveSrc.sizes}
            type="image/jpeg"
          />
        )}
        <img
          className={RoseName}
          id={RoseID}
          style={{
            filter: isLoaded ? "none" : "blur(10px)",
            transition: "filter 0.3s ease-in-out",
            ...edit,
          }}
          height={height}
          width={width}
          src={webpSrc || src}
          alt={alt}
          loading="lazy"
          aria-label={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setError(true);
          }}
        />
      </picture>

      {imageSize && compressedSize && !error && (
        <p>
          Image Size: <span style={{ color: "blue" }}>{compressedSize} </span>
          KB
        </p>
      )}
      {error && <p style={{ color: "red" }}>Failed to load image</p>}
    </div>
  );
};
export function Section({
  children,
  RoseName,
  RoseID,
  edit = {},
  ariaLabelledby = "section",
  ...props
}) {
  let styles = {
    minHeight: "100vh",
    margin: "3rem 3rem 0rem 3rem",
    transition: "0.2s",
    boxSizing: "border-box",
    ...edit,
  };

  return (
    <div
      className={RoseName}
      id={RoseID}
      style={styles}
      aria-labelledby={ariaLabelledby}
      {...props}
    >
      {children}
    </div>
  );
}
