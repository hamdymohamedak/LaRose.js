
export default function SplitText({ children, RoseName, RoseId, edit = {}, speed = 0.5, delay = 0.05 }) {
    // Split the text into individual characters
    const splitText = children.split('').map((char, index) => (
        <span
            key={index}
            className="char"
            style={{ '--char-index': index }}
        >
            {char === ' ' ? '\u00A0' : char} {/* Replace spaces with non-breaking spaces */}
        </span>
    ));

    return (
        <>
            <style>{`
                .char {
                    display: inline-block;
                    opacity: 0;
                    transform: translateY(20px);
                    animation: splitAnimation ${speed}s forwards;
                    animation-delay: calc(var(--char-index) * ${delay}s);
                }

                @keyframes splitAnimation {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
            <div style={{
                ...edit
            }} id={RoseId} className={RoseName}>
                {splitText}
            </div>
        </>
    );
}
