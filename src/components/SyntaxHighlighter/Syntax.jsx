import React, { useState, useEffect } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Syntax.css";

export default function Syntax({ code }) {
  const [customStyle, setCustomStyle] = useState({
    minHeight: "1rem",
    width: "40rem",
    color: "#f8fafc",
    overflowX: "auto",
    backgroundColor: "#1e293b",
    overflowX: "auto",
    fontWeight: "400",
    fontSize: "1rem",
    marginTop: "1.4285714285714286rem",
    marginBottom: "2.2857142857142856rem",
    borderRadius: "0.75rem",
    padding: "0.5rem",
    boxShadow: "0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a",
    display: "flex",
    textAlign: "start",
    position: "relative",
    justifyContent: "space-between", // Aligns items to the end
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 564) {
        setCustomStyle((prevStyle) => ({
          ...prevStyle,
          width: "28rem",
        }));
      } else {
        setCustomStyle((prevStyle) => ({
          ...prevStyle,
          width: "40rem",
        }));
      }
    }

    handleResize(); // Call initially to set the initial width

    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleCopy = () => {
    navigator.clipboard.writeText(code); // Copy code to clipboard
    toast("code is copied!", {
      position: "top-right",
    });
  };

  return (
    <div onClick={handleCopy} style={{ position: "relative",cursor:"pointer" }}>
      <SyntaxHighlighter
        language="rust"
        style={a11yDark}
        customStyle={customStyle}
        showLineNumbers
        wrapLines
      >
        {code}
      </SyntaxHighlighter>
      <ToastContainer icon theme="dark" closeButton />
    </div>
  );
}
