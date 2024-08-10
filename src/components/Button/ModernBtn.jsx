
export default function ModernBtn({ bg, title,allColor, fontSize, color, hoverColor }) {
    return (
        <>
            <style>{`
                .animated-button {
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 0.2rem;
                    padding: 1rem 2rem;
                    border: 4px solid transparent;
                    font-size: ${fontSize}rem;
                    background-color: inherit;
                    border-radius: 100px;
                    font-weight: 600;
                    color: ${color};
                    box-shadow: 0 0 0 2px ${allColor};
                    cursor: pointer;
                    overflow: hidden;
                    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
                }
                .animated-button svg {
                    position: absolute;
                    width: 24px;
                    fill: ${allColor};
                    z-index: 9;
                    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
                }
                .animated-button .arr-1 {
                    right: 16px;
                }
                .animated-button .arr-2 {
                    left: -25%;
                }
                .animated-button .circle {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 1.1rem;
                    height: 1.1rem;
                    background-color: ${allColor};
                    border-radius: 50%;
                    opacity: 0;
                    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
                }
                .animated-button .text {
                    position: relative;
                    z-index: 1;
                    transform: translateX(-12px);
                    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
                }
                .animated-button:hover {
                    box-shadow: 0 0 0 12px transparent;
                    color: ${hoverColor};
                    border-radius: 12px;
                }
                .animated-button:hover .arr-1 {
                    right: -25%;
                }
                .animated-button:hover .arr-2 {
                    left: 1rem;
                }
                .animated-button:hover .text {
                    transform: translateX(12px);
                }
                .animated-button:hover svg {
                    fill: #212121;
                }
                .animated-button:active {
                    transform: scale(0.95);
                    box-shadow: 0 0 0 4px greenyellow;
                }
                .animated-button:hover .circle {
                    width: 13.75rem;
                    height: 13.75rem;
                    opacity: 1;
                }
            `}</style>

            <button className="animated-button">
                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
                <span className="text">{title}</span>
                <span className="circle" />
                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
            </button>
        </>
    );
}
