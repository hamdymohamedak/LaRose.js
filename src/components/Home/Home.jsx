import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Card from "../card/Card.jsx";
import Syntax from "../SyntaxHighlighter/Syntax.jsx";
import { Link } from "react-router-dom";
import data from "../Information.json";
import Boxes from "../Boxes/Boxes.jsx";
import RoseBox, { CounterUp, Loader, Slider, ModernBtn } from "../LaRose";
const api = "https://count-website-views.onrender.com/count";

function Home() {
  const [count, setCount] = useState(null);
  const [displayStyle, setDisplayStyle] = useState("0");
  const [countAnimate, setCountAnimate] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [atHover, setAtHover] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch(api, { method: "GET" });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await res.json();
        setCount(json.count);
        setDisplayStyle("1");
        setIsLoading(false); // Corrected: Set loading to false after data is fetched

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
        console.error("Fetching count failed: ", error);
        setIsLoading(false); // Corrected: Set loading to false even if there's an error
      }
    };

    fetchCount();
  }, []);

  const handleHoverSlider = () => setAtHover(false);
  const handleLeaveSlider = () => setAtHover(true);

  return (
    <>
      <Navbar />
      <Boxes />
      <section className="Home_parent">
        <div className="title_parent">
          <h1 style={{ fontSize: "3.5rem", marginTop: "4rem" }}>
            Welcome to AK Macros Documentation
          </h1>
          <div className="btn_parent">
            <ModernBtn clickEvent={() => { window.open("../Installation/") }} color={"white"} allColor={"#0077e5"} fontSize={2} title={"Get Started"} />
            <RoseBox
              clickEvent={() => { window.open("https://crates.io/crates/ak_macros") }}
              RoseName="seeMore"
              flex={true}
              atHover={true}
              edit={{ cursor: "pointer" }}
            >
              crates.io <i className="fa-solid fa-arrow-right"></i>
            </RoseBox>
          </div>
          <div style={{ opacity: displayStyle }} className="outer">
            {isLoading ? (
              <Loader />
            ) : (
              <div id="card" className="card">
                <div className="ray"></div>
                <div className="text"></div>
                <pre>
                  <i id="usersIcon" className="fa-solid fa-users">
                    <CounterUp start={0} end={count} time={1} />
                  </i>
                </pre>
                <div className="line topl"></div>
                <div className="line leftl"></div>
                <div className="line bottoml"></div>
                <div className="line rightl"></div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="FEATURES">
        <div className="features_title">
          <div>FEATURES</div>
          <h2>Powerful Features of AK-Macros Library</h2>
          <h3>
            Discover the capabilities of AK-Macros for efficient Rust
            development
          </h3>
        </div>
        <div
          onMouseLeave={handleLeaveSlider}
          onMouseEnter={handleHoverSlider}
          className="cards"
        >
          <Slider autoplay={atHover} autoplayInterval={2000}>
            <Card
              title="Features"
              para="Provides a collection of macros for common programming tasks. Demonstrates how macros can improve code readability and maintainability. Offers examples and usage instructions to help developers leverage macros effectively."
            />
            <Card
              title="Code Reusability and Metaprogramming"
              para="Code Reusability: AK-Macros provides reusable code patterns that can be used across projects, reducing duplication and promoting cleaner, more maintainable codebases.
                Metaprogramming: Developers can use AK-Macros to generate code at compile time based on certain patterns or conditions, reducing boilerplate code and making the codebase more expressive."
            />
            <Card
              title="Domain-Specific Languages and Error Handling"
              para="Domain-Specific Languages (DSLs): With AK-Macros, developers can create domain-specific languages within Rust, tailored to specific problem domains, leading to more intuitive and concise code.
                Error Handling: AK-Macros offers custom error handling macros that abstract away common error-handling patterns, resulting in more readable and consistent error-handling code."
            />
            <Card
              title="Performance Optimization"
              para="Performance Optimization: AK-Macros can be used to optimize performance-critical code by generating specialized code tailored to specific use cases, leading to more efficient code execution."
            />
          </Slider>
        </div>
        <RoseBox edit={{ fontWeight: "bold" }} aspectRatio autoLayout flex atHover >AK-Macrod Docs Build with React LaRose.js</RoseBox>
      </section>
      <section className="Q_secton">
        <div className="Q_sectionTitle">
          FAQ Common questions Here are some of the most common questions that
          we get.
        </div>
        <div className="titles">
          <div>
            <h1>What is ak-macros?</h1>
            <p>
              ak-macros is a Rust library that provides macros for common tasks
              in Rust programming.
            </p>
          </div>
          <div>
            <h1>How can I install ak-macros?</h1>
            <p>
              You can install ak-macros by adding it as a dependency in your
              Cargo.toml file
              <Syntax code={`ak_macros = "${data.version}"`} />
            </p>
          </div>
          <div>
            <h1>What are some key features of ak-macros?</h1>
            <p>
              ak-macros offers convenient macros for tasks like error handling,
              logging, and more to simplify Rust development.
            </p>
          </div>
          <div>
            <h1>Is ak-macros actively maintained?</h1>
            <p>
              Yes, ak-macros is actively maintained and updated to support the
              latest Rust language features.
            </p>
          </div>
          <div>
            <h1>Can I contribute to ak-macros?</h1>
            <p>
              Yes, contributions to ak-macros are welcome. You can submit
              issues, feature requests, or pull requests on the GitHub
              repository.
            </p>
          </div>
        </div>
      </section>
      <Navbar />
    </>
  );
}

export default Home;
