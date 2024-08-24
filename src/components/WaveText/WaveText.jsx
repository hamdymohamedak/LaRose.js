import React, { useState, useEffect } from 'react';

export default function WaveText({
    children,
    RoseName,
    RoseId,
    initialWaveType = 'character', // Initial waveType, defaults to 'character'
    edit = {},
    speed = 0.5,
    delay = 0.05,
    amplitude = 10,
    frequency = 0.5
}) {
    const [waveType, setWaveType] = useState(initialWaveType);

    useEffect(() => {
        const timer = setTimeout(() => {
            setWaveType('word'); // Change to 'word' after AnimatedEnd
        }, speed * 1000 + 200);

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, [speed]);

    // Split the text based on waveType (word or character)
    const splitText = waveType === 'word' ? children.split(/(\s+)/) : children.split('');

    // Map through the split text to create the wave effect
    const waveText = splitText.map((item, index) => (
        <span
            key={index}
            className="WaveTextItem"
            style={{ '--WaveTextItem-index': index }}
        >
            {item === ' ' ? '\u00A0' : item} {/* Handle spaces */}
        </span>
    ));

    return (
        <>
            <style>{`
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
