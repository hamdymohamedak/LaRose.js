// AMT_PACKAGE is a Library was built with AMT-TEAM 
// for More About Team Visit website =>  https://amt-egypt.vercel.app
// Happy Hacking (˶ˆᗜˆ˵)

import React, { useEffect, useState } from 'react';
export function Ak_Alert({ title, time }) {
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
      position: "relative" // Add position relative to properly position the close button
    },
    infoIcon: {
      width: "20px",
      height: "20px",
      transform: "translateY(-2px)",
      marginRight: "8px"
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
      position: "absolute", // Position close button to the right of the alert
      right: "0.9rem",
      top: "50%",
      transform: "translateY(-50%)"
    }
  };

  const handleClose = () => {
    setDisplay("none");
  };

  return (
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
    </div>
  );
}

export function Button({ h, w, event }) {
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




export function CounterUp({ start, end, time, size, weight }) {
  const [number, setNumber] = useState(start);

  useEffect(() => {
    if (number < end) {
      const timer = setTimeout(() => {
        setNumber(prevNumber => prevNumber + 1);
      }, time);

      return () => clearTimeout(timer);
    }
  }, [number, end, time]);

  useEffect(() => {
    setNumber(start);
  }, [start]);

  return (
    <div style={{ fontSize: `${size}rem`, fontWeight: `${weight}` }}>{number}</div>
  );
}

export function CounterDown({ start, end, time, size }) {
  const [number, setNumber] = useState(start);

  useEffect(() => {
    if (number > end) {
      const timer = setTimeout(() => {
        setNumber(prevNumber => prevNumber - 1);
      }, time);

      return () => clearTimeout(timer);
    }
  }, [number, end, time]);

  useEffect(() => {
    setNumber(start);
  }, [start]);

  return (
    <div style={{ fontSize: `${size}rem` }}>{number}</div>
  );
}


export function ModernBtn({ title, allColor, fontSize, color, hoverColor, clickEvent }) {

  let handleClick = () => {
    if (typeof clickEvent === "function") {
      clickEvent();
    }
  }
  return (
    <>
      <style>{`
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
                }
                .animated-button svg {
                    position: absolute;
                    width: 24px;
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

      <button onClick={handleClick} className="animated-button">
        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
        <span className="text">{title}</span>
        <span className="circle" />
        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
      </button>
    </>
  );
}

export function SwitchCase({ w, h }) {
  return (
    <>

      <style>{` 
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
      width:${w}rem;
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
      content: '';
      animation-name: toggler-size;
      animation-duration: 0.15s;
      animation-timing-function: ease-out;
      animation-direction: forwards;
      animation-iteration-count: 1;
      animation-play-state: running;
    }
    
    .toggler label::after, .toggler label .toggler-on, .toggler label .toggler-off {
      position: absolute;
      top: 50%;
      left: 25%;
      width: 26px;
      height: 26px;
      transform: translateY(-50%) translateX(-50%);
      transition: left 0.15s ease-in-out, background-color 0.2s ease-out, width 0.15s ease-in-out, height 0.15s ease-in-out, opacity 0.15s ease-in-out;
    }
    
    .toggler input:checked + label::after, .toggler input:checked + label .toggler-on, .toggler input:checked + label .toggler-off {
      left: 75%;
    }
    
    .toggler input:checked + label::after {
      background-color: #50ac5d;
      animation-name: toggler-size2;
    }
    
    .toggler .toggler-on, .toggler .toggler-off {
      opacity: 1;
      z-index: 2;
    }
    
    .toggler input:checked + label .toggler-off, .toggler input:not(:checked) + label .toggler-on {
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
      0%, 100% {
        width: 1.5rem;
        height: 1.5rem;
      }
    
      50% {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    
    @keyframes toggler-size2 {
      0%, 100% {
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
        <input id="toggler-1" name="toggler-1" type="checkbox" defaultValue={1} />
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
            <line className="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8" />
            <line className="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8" />
          </svg>
        </label>
      </div>
    </>

  )
}



export function ChecOut({ title, clickEvent }) {
  let handleEvent = () => {
    if (typeof clickEvent === "function") {
      clickEvent();
    }

  }
  return (
    <>
      <style>{`
                .container {
  background-color: #ffffff;
  display: flex;
  width: 270px;
  height: 120px;
  position: relative;
  border-radius: 6px;
  transition: 0.3s ease-in-out;
}

.container:hover {
  transform: scale(1.03);
}

.container:hover .left-side {
  width: 100%;
}

.left-side {
  background-color: #5de2a3;
  width: 130px;
  height: 120px;
  border-radius: 4px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  flex-shrink: 0;
  overflow: hidden;
}

.right-side {
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  justify-content: space-between;
  white-space: nowrap;
  transition: 0.3s;
}

.right-side:hover {
  background-color: #f9f7f9;
}

.arrow {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}

.new {
  font-size: 23px;
  font-family: "Lexend Deca", sans-serif;
  margin-left: 20px;
}

.card {
  width: 70px;
  height: 46px;
  background-color: #c7ffbc;
  border-radius: 6px;
  position: absolute;
  display: flex;
  z-index: 10;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 9px 9px 9px -2px rgba(77, 200, 143, 0.72);
  -moz-box-shadow: 9px 9px 9px -2px rgba(77, 200, 143, 0.72);
  -webkit-box-shadow: 9px 9px 9px -2px rgba(77, 200, 143, 0.72);
}

.card-line {
  width: 65px;
  height: 13px;
  background-color: #80ea69;
  border-radius: 2px;
  margin-top: 7px;
}

@media only screen and (max-width: 480px) {
  .container {
    transform: scale(0.7);
  }

  .container:hover {
    transform: scale(0.74);
  }

  .new {
    font-size: 18px;
  }
}

.buttons {
  width: 8px;
  height: 8px;
  background-color: #379e1f;
  box-shadow: 0 -10px 0 0 #26850e, 0 10px 0 0 #56be3e;
  border-radius: 50%;
  margin-top: 5px;
  transform: rotate(90deg);
  margin: 10px 0 0 -30px;
}

.container:hover .card {
  animation: slide-top 1.2s cubic-bezier(0.645, 0.045, 0.355, 1) both;
}

.container:hover .post {
  animation: slide-post 1s cubic-bezier(0.165, 0.84, 0.44, 1) both;
}

@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  50% {
    -webkit-transform: translateY(-70px) rotate(90deg);
    transform: translateY(-70px) rotate(90deg);
  }

  60% {
    -webkit-transform: translateY(-70px) rotate(90deg);
    transform: translateY(-70px) rotate(90deg);
  }

  100% {
    -webkit-transform: translateY(-8px) rotate(90deg);
    transform: translateY(-8px) rotate(90deg);
  }
}

.post {
  width: 63px;
  height: 75px;
  background-color: #dddde0;
  position: absolute;
  z-index: 11;
  bottom: 10px;
  top: 120px;
  border-radius: 6px;
  overflow: hidden;
}

.post-line {
  width: 47px;
  height: 9px;
  background-color: #545354;
  position: absolute;
  border-radius: 0px 0px 3px 3px;
  right: 8px;
  top: 8px;
}

.post-line:before {
  content: "";
  position: absolute;
  width: 47px;
  height: 9px;
  background-color: #757375;
  top: -8px;
}

.screen {
  width: 47px;
  height: 23px;
  background-color: #ffffff;
  position: absolute;
  top: 22px;
  right: 8px;
  border-radius: 3px;
}

.numbers {
  width: 12px;
  height: 12px;
  background-color: #838183;
  box-shadow: 0 -18px 0 0 #838183, 0 18px 0 0 #838183;
  border-radius: 2px;
  position: absolute;
  transform: rotate(90deg);
  left: 25px;
  top: 52px;
}

.numbers-line2 {
  width: 12px;
  height: 12px;
  background-color: #aaa9ab;
  box-shadow: 0 -18px 0 0 #aaa9ab, 0 18px 0 0 #aaa9ab;
  border-radius: 2px;
  position: absolute;
  transform: rotate(90deg);
  left: 25px;
  top: 68px;
}

@keyframes slide-post {
  50% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(-70px);
    transform: translateY(-70px);
  }
}

.dollar {
  position: absolute;
  font-size: 16px;
  font-family: "Lexend Deca", sans-serif;
  width: 100%;
  left: 0;
  top: 0;
  color: #4b953b;
  text-align: center;
}

.container:hover .dollar {
  animation: fade-in-fwd 0.3s 1s backwards;
}

@keyframes fade-in-fwd {
  0% {
    opacity: 0;
    transform: translateY(-5px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
       
            `}</style>
      <div onClick={handleEvent} className="container">
        <div className="left-side">
          <div className="card">
            <div className="card-line" />
            <div className="buttons" />
          </div>
          <div className="post">
            <div className="post-line" />
            <div className="screen">
              <div className="dollar">$</div>
            </div>
            <div className="numbers" />
            <div className="numbers-line2" />
          </div>
        </div>
        <div className="right-side">
          <div className="new">{title}</div>
          <svg
            viewBox="0 0 451.846 451.847"
            height={512}
            width={512}
            xmlns="http://www.w3.org/2000/svg"
            className="arrow"
          >
            <path
              fill="#cfcfcf"
              data-old_color="#000000"
              className="active-path"
              data-original="#000000"
              d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
            />
          </svg>
        </div>
      </div>
    </>
  )
}

export function Loader() {
  return (
    <>
      <style>{`
        /* Assuming base font size of 16px, so 1rem = 16px */

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-wide {
    width: 10.375rem;
    height: 10.375rem;
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
  height: 3.75rem;  /* 60px / 16px */
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
  height: 2.5rem;   /* 40px / 16px */
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0.5rem;    /* 8px / 16px */
}

.e2 {
  width: 3.75rem;  /* 60px / 16px */
  height: 0.0625rem; /* 1px / 16px */
  opacity: 0.8;
  position: absolute;
  top: 0.5rem;    /* 8px / 16px */
  left: 0;
}

.e3 {
  position: absolute;
  top: 0.625rem;  /* 10px / 16px */
  left: 0.75rem;  /* 12px / 16px */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 900;
  font-size: 1.125rem;  /* 18px / 16px */
  color: #3395ff;
}

.e4 {
  width: 0.0625rem; /* 1px / 16px */
  height: 2.5rem;   /* 40px / 16px */
  opacity: 0.3;
  position: absolute;
  top: 5.625rem;   /* 90px / 16px */
  right: 0.625rem; /* 10px / 16px */
}

.e5 {
  width: 2.5rem;   /* 40px / 16px */
  height: 0.0625rem; /* 1px / 16px */
  opacity: 0.3;
  position: absolute;
  top: 6.25rem;    /* 100px / 16px */
  right: 0;
}

.e6 {
  position: absolute;
  top: 6.25rem;    /* 100px / 16px */
  right: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2rem;  /* 32px / 16px */
  color: #3395ff;
}

.e7 {
  width: 0.0625rem; /* 1px / 16px */
  height: 1.25rem;  /* 20px / 16px */
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
  width: 1.25rem;  /* 20px / 16px */
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

  )
}

export function Slider({ children, autoplay = false, autoplayInterval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoplay) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
        );
      }, autoplayInterval);
      return () => clearInterval(intervalId);
    }
  }, [autoplay, autoplayInterval, children]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <style>{`
      .slider-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider-wrapper {
  width: 100%;
  overflow: hidden;
}

.slider-content {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slider-slide {
  flex: 0 0 100%;
  box-sizing: border-box;
    display: flex;
  justify-content: center;
  align-items: center;
}

.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
}

.slider-button.prev {
  left: 10px;
}

.slider-button.next {
  right: 10px;
}

.slider-pagination {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.pagination-dot {
  width: 10px;
  height: 10px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.pagination-dot.active {
  background: white;
}

      `}</style>
      <div className="slider-container">
        <button className="slider-button prev" onClick={handlePrev}>
          &lt;
        </button>
        <div className="slider-wrapper">
          <div className="slider-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {React.Children.map(children, (child, index) => (
              <div className="slider-slide" key={index}>
                {child}
              </div>
            ))}
          </div>
        </div>
        <button className="slider-button next" onClick={handleNext}>
          &gt;
        </button>
        <div className="slider-pagination">
          {React.Children.map(children, (_, index) => (
            <span
              key={index}
              className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export function MiniNav() {
  return (
    <>
      <style>{`
        .button-container {
        display: flex;
        flex-direction: column;
        background-color: rgb(27, 133, 219);
        width: 4rem;
        height: 10rem ;
        align-items: center;
        justify-content: flex-start;
        border-radius: 0 10px 10px 0;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px, rgba(27, 133, 219, 0.5) 5px 10px 15px;
        padding-top: 1rem;
        position: fixed;
        top: 30.1%;
        left: 0%;
        }

        .button {
          outline: 0 !important;
          border: 0 !important;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: all ease-in-out 0.3s;
          cursor: pointer;
          margin-bottom: 1rem; /* Space between buttons */
        }

        .button:hover {
          transform: translateY(-3px);
        }

        .icon {
          font-size: 20px;
      `}</style>
      <div className="button-container">
        <button onClick={() => { window.open("/", "_self") }} className="button">
          <svg
            className="icon"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
          </svg>
        </button>
        <button onClick={() => { window.open("https://amt-egypt.vercel.app/#work") }} className="button">
          <svg
            className="icon"
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button onClick={() => { window.open("https://amt-egypt.vercel.app/#service") }} className="button">
          <svg
            className="icon"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
          </svg>
        </button>
      </div>
    </>
  );
}
