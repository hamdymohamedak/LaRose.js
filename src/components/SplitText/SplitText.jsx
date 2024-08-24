import React, { useState, useEffect } from 'react';

export default function SplitText({
    children,
    RoseName,
    RoseId,
    initialAnimateTypeStyle = 'character', 
    edit = {},
    speed = 0.5,
    delay = 0.05,
}) {
    const [animateTypeStyle, setAnimateTypeStyle] = useState(initialAnimateTypeStyle);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateTypeStyle('word'); // Change to 'word' after speed
        }, speed * 1000 + 600); // Adjust duration as needed

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, [speed]);

    // Split the text based on animateTypeStyle (word or character)
    const splitText = animateTypeStyle === 'word' ? children.split(/(\s+)/) : children.split('');

    // Map through the split text to create the animation effect
    const animatedText = splitText.map((item, index) => (
        <span
            key={index}
            className="SplitTextItem"
            style={{ '--SplitTextItem-index': index }}
        >
            {item === ' ' ? '\u00A0' : item} {/* Handle spaces */}
        </span>
    ));

    return (
        <>
            <style>{`
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
