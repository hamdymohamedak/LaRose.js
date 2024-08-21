import { useState } from "react";

export default function Button({ h, w, event }) {
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
    border: "none"
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
    <button
      style={combinedStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleEvent}
    >
      button
    </button>
  );
}
