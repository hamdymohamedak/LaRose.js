import { useState, useEffect } from "react";

export default function RoseBox({
    children,
    edit = {},
    background = "",
    RoseName = "",
    RoseID = "",
    autoLayout = false,
    shadow = false,
    shadowColor = "black",
    aspectRatio = null,
    atHover = false,
    grid = false,
    flex = false,
    scaleAnimate = false,
    childrenVisible = true,
    onClick,
    ariaLabel,
    role,
    lazy = false,
    AutoHandling = false,
    outlineOffset = 0,
}) {
    const [isLoaded, setIsLoaded] = useState(!lazy);

    useEffect(() => {
        if (lazy) {
            const timer = setTimeout(() => {
                setIsLoaded(true);
            }, 200); // Adjust the delay as needed
            return () => clearTimeout(timer);
        }
    }, [lazy]);

    const layoutStyle = autoLayout
        ? { padding: '0.8rem', margin: '0 auto', overflow: 'hidden' }
        : {};
    const shadowStyle = shadow
        ? { boxShadow: `0px 0px 9px 1px ${shadowColor}` }
        : {};
    const aspectStyle = aspectRatio
        ? { aspectRatio }
        : {};

    const displayLayoutStyle = grid
        ? { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))' }
        : flex
            ? { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }
            : {};
    const backgroundStyle = background
        ? { background }
        : {};

    const autoHandleStyle = AutoHandling ? {
        background: "#1b85db",
        height: "3rem",
        minWidth: "11rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #1b85db",
        borderRadius: "7px",
        fontWeight: "bold",
        boxShadow: "#1b85db 0px 50px 100px -20px, #1b85db 0px 30px 60px -30px, #1b85db 0px -2px 6px 0px inset",
        outlineOffset: `${outlineOffset}`,
        outlineStyle: "solid",
        outlineColor: "#1b85db",
        outlineWidth: "2px",
        cursor: "pointer"
    } : {};
    const hoverClass = atHover ? 'rosebox-hover' : '';

    const handleClick = () => {
        if (typeof onClick === "function") {
            onClick();
        }
    }
    return (
        <>
            <style>{`
                .rosebox-hover {
                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;
                }

                .rosebox-hover:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    background-color: rgba(240, 240, 240, 0.8);
                }

                .rosebox-scale-animate {
                    animation: scale-down 0.6s ease-out forwards;
                }

                @keyframes scale-down {
                    0% {
                        transform: scale(2);
                    }
                    100% {
                        transform: scale(0.9);
                    }
                }
            `}</style>
            {childrenVisible && (
                <div
                    aria-label={ariaLabel}
                    role={role}
                    onClick={handleClick}
                    id={RoseID}
                    className={`${RoseName} ${hoverClass} ${scaleAnimate ? 'rosebox-scale-animate' : ''}`}
                    style={{ ...edit, ...layoutStyle, ...shadowStyle, ...aspectStyle, ...displayLayoutStyle, ...backgroundStyle, ...autoHandleStyle }}
                >
                    {isLoaded ? children : <div>Loading...</div>}
                </div>
            )}
        </>
    );
}
