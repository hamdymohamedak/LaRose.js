
export default function Variants({
    rotate = 0,
    scale = 1,
    speed = 0.8,
    x = "0",
    y = "0",
    children,
    RoseID,
    RoseName = "RotatingVariantsComponentStyle",
    edit,
    childDisplay = "grid",
}) {
    return (
        <>
            <style>{`
                .${RoseName} {
                    min-height: 7rem;
                    width: 7rem;
                    background:#380eff;
                    border-radius: 26px;
                    display: grid;
                    grid-template-columns: auto auto;
                    grid-gap: 1rem;
                    justify-content: center;
                    align-items: center;
                    animation: ${RoseName}Animated ${speed}s ease-in-out forwards;
                    transform: rotate(${rotate}deg) scale(${scale});
                    opacity: 0;
                    overflow: hidden;
                    transform: translate(${x}, ${y});
                }
                
                @keyframes ${RoseName}Animated {
                    to {
                        opacity: 1;
                        transform: rotate(${rotate}deg) scale(${scale});
                    }
                }
            `}</style>
            <div style={edit} className={RoseName} id={RoseID}>
                {children}
                <div
                    style={{ height: "2rem", width: "2rem", background: "#EEE", borderRadius: "50%", display: childDisplay, }}
                ></div>
                <div
                    style={{ height: "2rem", width: "2rem", background: "#EEE", borderRadius: "50%", display: childDisplay, }}
                ></div>
                <div
                    style={{ height: "2rem", width: "2rem", background: "#EEE", borderRadius: "50%", display: childDisplay, }}
                ></div>
                <div
                    style={{ height: "2rem", width: "2rem", background: "#EEE", borderRadius: "50%", display: childDisplay, }}
                ></div>
            </div>
        </>
    );
}
