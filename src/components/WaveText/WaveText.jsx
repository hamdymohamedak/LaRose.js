import React from 'react';

export default function WaveText({ 
    children, 
    RoseName, 
    RoseId, 
    edit = {}, 
    speed = 0.5, 
    delay = 0.05, 
    amplitude = 10, 
    frequency = 0.5 
}) {
    // Split the text into individual characters
    const waveText = children.split('').map((WaveTextChar, index) => (
        <span
            key={index}
            className="WaveTextChar"
            style={{ '--WaveTextChar-index': index }}
        >
            {WaveTextChar === ' ' ? '\u00A0' : WaveTextChar} {/* Replace spaces with non-breaking spaces */}
        </span>
    ));

    return (
        <>
            <style>{`
                .WaveTextChar {
                    display: inline-block;
                    opacity: 0;
                    transform: translateY(${amplitude}px);
                    animation: waveAnimation ${speed}s forwards;
                    animation-delay: calc(var(--WaveTextChar-index) * ${delay}s);
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
