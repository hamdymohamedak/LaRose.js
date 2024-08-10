import React from 'react'

export default function SwitchCase({ w, h }) {
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
