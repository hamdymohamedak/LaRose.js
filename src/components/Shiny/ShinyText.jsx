import React from 'react';

export default function ShinyText({ 
    children, 
    RoseName, 
    RoseId, 
    edit = {}, 
    speed = 2, // duration of the shine effect
    color = '#fff', // color of the shiny effect
    backgroundColor = '#000' // background color to contrast with the shine
}) {
    return (
        <>
            <style>{`
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
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    height: 100%;
                    width: 100%;
                    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.7), transparent);
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
            <div style={{ ...edit }} id={RoseId} className={`shiny-text ${RoseName}`}>
                {children}
            </div>
        </>
    );
}
