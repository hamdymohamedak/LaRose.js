
export default function Spring({
    rotate = 360,  // Default rotation to 360 degrees
    scale = 1,     // Default scale to 1 (normal size)
    speed = 0.8,   // Default speed to 0.8 seconds
    x = "0",     // Default x translation
    y = "0",     // Default y translation
    children,
    RoseID,
    RoseName = "RotatingSpringComponentStyle",
    edit
}) {
    return (
        <>
            <style>{`
                .${RoseName}{
                    min-height: 7rem;
                    width: 7rem;
                    background: #ffffff;
                    border-radius: 26px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    animation: LaRoseRotatingAnimated ${speed}s ease-in-out forwards;
                    transform: rotate(0deg) scale(0);
                    opacity: 0;
                    overflow: hidden;
                    translate: ${x} ${y};
                }
                
                @keyframes LaRoseRotatingAnimated {
                    to {
                        transform: rotate(${rotate}deg) scale(${scale});
                        opacity: 1;
                    }
                }
            `}</style>
            <div style={edit} className={RoseName} id={RoseID}>
                {children}
            </div>
        </>
    );
}
