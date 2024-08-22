import React from 'react';

export default function ShinyButton({
    children,
    RoseName,
    RoseId,
    edit = {},
    speed = 2, // duration of the shine effect
    color = '#fff', // text color
    backgroundColor = '#111', // button background color
    padding = '10px 20px', // button padding
    borderRadius = '5px' // button border radius
}) {
    return (
        <>
            <style>{`
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
                    padding: .4em 1.2em;
                    border-radius: 50px;
                    transition: .3s ease;
                }

                .shiny-button::before {
                    content: '';
                    position: absolute;
                    top: -100%;
                    left: -100%;
                    height: 100%;
                    width: 100%;
                    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.7), transparent);
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
            <button style={{ ...edit }} id={RoseId} className={`shiny-button ${RoseName}`}>
                {children}
            </button>
        </>
    );
}
