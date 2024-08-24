import React, { useState, useEffect } from 'react';

export default function AnimatedText({
    children,
    RoseName,
    RoseId,
    edit = {},
    speed = 0.5,
    delay = 0.05,
    animationType = 'blur',  // Type of animation: 'blur', 'fadeIn', 'slideIn', 'zoomIn'
    initialAnimateTypeStyle = 'character',  // Initial prop for animating by 'word' or 'character'
}) {
    const [animateTypeStyle, setAnimateTypeStyle] = useState(initialAnimateTypeStyle);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateTypeStyle('word'); // Change to 'word' after the animation ends
        }, speed * 1000 + 600); // Adjust duration as needed

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, [speed]);

    // Split the text based on animateTypeStyle (word or character)
    const splitText = animateTypeStyle === 'word'
        ? children.split(/(\s+)/) // Split by spaces and preserve them
        : children.split('');

    // Map through the split text to create the animation effect
    const animatedText = splitText.map((item, index) => (
        <span
            key={index}
            className="AnimatedTextItem"
            style={{ '--AnimatedTextItem-index': index }}
        >
            {item === ' ' ? '\u00A0' : item} {/* Handle spaces */}
            {animateTypeStyle === 'word' && item === ' ' && ' '} {/* Ensure space rendering if animating words */}
        </span>
    ));

    const animations = {
        blur: `
            filter: blur(15px);
            animation: blurAnimation ${speed}s forwards;
        `,
        fadeIn: `
            opacity: 0;
            animation: fadeInAnimation ${speed}s forwards;
        `,
        slideIn: `
            transform: translateX(-20px);
            opacity: 0;
            animation: slideInAnimation ${speed}s forwards;
        `,
        zoomIn: `
            transform: scale(0.5);
            opacity: 0;
            animation: zoomInAnimation ${speed}s forwards;
        `,
    };

    const selectedAnimation = animations[animationType] || animations.blur;

    return (
        <>
            <style>{`
                .AnimatedTextItem {
                    display: inline-block;
                    ${selectedAnimation}
                    animation-delay: calc(var(--AnimatedTextItem-index) * ${delay}s);
                }

                @keyframes blurAnimation {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                        filter: blur(0);
                    }
                }

                @keyframes fadeInAnimation {
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideInAnimation {
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes zoomInAnimation {
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
            <div style={{ ...edit }} id={RoseId} className={RoseName}>
                {animatedText}
            </div>
        </>
    );
}
