export default function RoseBox({ children, edit = {}, background = "", RoseName = "", RoseID = "", autoLayout = false, shadow = false, aspectRatio = null, atHover = false, grid = false, flex = false }) {
    const layoutStyle = autoLayout
        ? { padding: '10px', margin: '0 auto', overflow: 'hidden' }
        : {};
    const shadowStyle = shadow
        ? { boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }
        : {};
    const aspectStyle = aspectRatio
        ? { aspectRatio }
        : {};

    const DisplaylayoutStyle = grid
        ? { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))' }
        : flex
            ? { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }
            : {};
    const backgroundStyle = background
        ? { background }
        : {};

    // Apply the hover class conditionally
    const hoverClass = atHover ? 'rosebox-hover' : '';

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

        `}</style>
            <div
                id={RoseID}
                className={`${RoseName} ${hoverClass}`}
                style={{ ...edit, ...layoutStyle, ...shadowStyle, ...aspectStyle, ...DisplaylayoutStyle, ...backgroundStyle }}
            >
                {children}
            </div>
        </>
    );
}
