import React from 'react';

export default function SideText({
    children,
    RoseID,
    RoseName = "side-textAnimatedLarose",
    edit = {},
    direction = 'left', // Default direction is 'left'
}) {
    const animationDirection = direction === 'right' ? 'sideTextRight' : 'sideTextLeft';

    return (
        <>
            <style>{`
                .side-text {
                    display: inline-block;
                }

                /* SideTextLeft Animation */
                @keyframes sideTextLeft {
                    from {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                /* SideTextRight Animation */
                @keyframes sideTextRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                .sideTextLeft {
                    animation: sideTextLeft 1s ease-in-out;
                }

                .sideTextRight {
                    animation: sideTextRight 1s ease-in-out;
                }
            `}</style>
            <div id={RoseID} style={edit} className={`${RoseName} ${animationDirection}`}>
                {children}
            </div>
        </>
    );
}
