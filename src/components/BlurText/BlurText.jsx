import React from 'react';

export default function AnimatedText({ 
    children, 
    RoseName, 
    RoseId, 
    edit = {}, 
    speed = 0.5, 
    delay = 0.05, 
    animationType = 'blur' 
}) {
    // Split the text into individual characters
    const animatedText = children.split('').map((char, index) => (
        <span
            key={index}
            className="BlurTextChar"
            style={{ '--BlurTextChar-index': index }}
        >
            {char === ' ' ? '\u00A0' : char} {/* Replace spaces with non-breaking spaces */}
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
                .BlurTextChar {
                    display: inline-block;
                    ${selectedAnimation}
                    animation-delay: calc(var(--BlurTextChar-index) * ${delay}s);
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