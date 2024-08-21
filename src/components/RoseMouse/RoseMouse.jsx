import { useEffect, useState, useRef } from "react";

export let RoseMouse = ({
    children,
    title = "",
    h = 5,
    w = 5,
    borderRadiusValue = "50%",
    bg = "black",
    cursorView = false, // Fixed the typo here
    zIndexValue = "999",
    edit = {},
    RoseId = "",
    RoseName = ""
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const mousePositionRef = useRef(mousePosition);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX: x, clientY: y } = event;
            if (x !== mousePositionRef.current.x || y !== mousePositionRef.current.y) {
                mousePositionRef.current = { x, y };
                requestAnimationFrame(() => {
                    setMousePosition(mousePositionRef.current);
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        document.body.style.cursor = cursorView ? 'none' : 'default';
        return () => {
            document.body.style.cursor = 'default'; // Reset cursor on unmount
        };
    }, [cursorView]);

    return (
        <div
            className={RoseName}
            id={RoseId}
            style={{
                position: "absolute",
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
                pointerEvents: "none",
                transform: "translate(-50%, -50%)",
                height: `${h}rem`,
                width: `${w}rem`,
                borderRadius: `${borderRadiusValue}`,
                background: `${bg}`,
                zIndex: zIndexValue,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.8,
                color: "white",
                fontSize: "0.75rem",
                textAlign: "center",
                transition: "transform 0.05s ease-out",

                ...edit,
            }}
        >
            {children}
            {title}
        </div>
    );
};
