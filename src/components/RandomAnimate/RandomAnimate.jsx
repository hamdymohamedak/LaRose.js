import React, { useEffect, useState } from 'react';

export default function RandomAnimate({
    children,
    RoseID,
    RoseName = "random-animate",
    edit = {
        backgroundColor: "#EEE",
        height: "12rem",
        width: "12rem",
        borderRadius: "20px",
        padding: "1rem",
        translate: (x, y) => `translate(${x}px, ${y}px)` // Default translate function
    },
    AnimatedType,
    x,
    y
}) {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        // List of possible animations
        const animations = [
            'fadeIn',
            'slideInLeft',
            'zoomIn',
            'rotateIn',
            'bounceIn',
            'flipInX',
            'flipInY',
            'lightSpeedIn',
            'rollIn',
            'jackInTheBox',
        ];

        if (AnimatedType) {
            // If AnimatedType is provided, use it as the animation class
            setAnimationClass(AnimatedType);
        } else {
            // Randomly pick an animation if AnimatedType is not provided
            const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
            setAnimationClass(randomAnimation);
        }
    }, [AnimatedType]);

    return (
        <>
            <style>{`
                .random-animate {
                    display: inline-block;
                }

                /* Add your keyframe animations here */
                /* Fade In Animation */
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .fadeIn { animation: fadeIn 1s ease-in-out; }

                /* Slide In Left Animation */
                @keyframes slideInLeft {
                    from { transform: translateX(-100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .slideInLeft { animation: slideInLeft 1s ease-in-out; }

                /* Zoom In Animation */
                @keyframes zoomIn {
                    from { transform: scale(0.5); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .zoomIn { animation: zoomIn 1s ease-in-out; }

                /* Rotate In Animation */
                @keyframes rotateIn {
                    from { transform: rotate(-200deg); opacity: 0; }
                    to { transform: rotate(0); opacity: 1; }
                }
                .rotateIn { animation: rotateIn 1s ease-in-out; }

                /* Bounce In Animation */
                @keyframes bounceIn {
                    0%, 20%, 40%, 60%, 80%, 100% {
                        transform: translateY(0);
                    }
                    50% { transform: translateY(-20px); }
                }
                .bounceIn { animation: bounceIn 1s ease-in-out; }

                /* Flip In X Animation */
                @keyframes flipInX {
                    from { transform: perspective(400px) rotateX(90deg); opacity: 0; }
                    to { transform: perspective(400px) rotateX(0deg); opacity: 1; }
                }
                .flipInX { animation: flipInX 1s ease-in-out; }

                /* Flip In Y Animation */
                @keyframes flipInY {
                    from { transform: perspective(400px) rotateY(90deg); opacity: 0; }
                    to { transform: perspective(400px) rotateY(0deg); opacity: 1; }
                }
                .flipInY { animation: flipInY 1s ease-in-out; }

                /* Light Speed In Animation */
                @keyframes lightSpeedIn {
                    from { transform: translateX(100%) skewX(-30deg); opacity: 0; }
                    to { transform: translateX(0) skewX(0deg); opacity: 1; }
                }
                .lightSpeedIn { animation: lightSpeedIn 1s ease-out; }

                /* Roll In Animation */
                @keyframes rollIn {
                    from { transform: translateX(-100%) rotate(-120deg); opacity: 0; }
                    to { transform: translateX(0) rotate(0deg); opacity: 1; }
                }
                .rollIn { animation: rollIn 1s ease-in-out; }

                /* Jack In The Box Animation */
                @keyframes jackInTheBox {
                    from { opacity: 0; transform: scale(0.1) rotate(30deg); }
                    50% { transform: rotate(-10deg); }
                    70% { transform: rotate(3deg); }
                    to { opacity: 1; transform: scale(1); }
                }
                .jackInTheBox { animation: jackInTheBox 1s ease-in-out; }
            `}</style>
            <div
                id={RoseID}
                style={{
                    ...edit,
                    transform: x !== undefined && y !== undefined ? edit.translate(x, y) : undefined
                }}
                className={`${RoseName} ${animationClass}`}
            >
                {children}
                {!children && animationClass}
            </div>
        </>
    );
}            