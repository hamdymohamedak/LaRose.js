import React from 'react';

const RoseParent = ({ children, edit, RoseID, RoseName }) => {
    return (
        <>
            <style>{`
                .rose-parent {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                    padding: 1rem;
                    box-sizing: border-box;
                    width: 100%;
                    min-height: 100vh;
                }

                @media (min-width: 768px) {
                    .rose-parent {
                        flex-direction: row;
                        justify-content: space-between;
                    }
                }

                @media (max-width: 767px) {
                    .rose-parent {
                        flex-direction: column;
                        align-items: center;
                    }
                }
            `}</style>
            <div id={RoseID} className={`rose-parent ${RoseName}`} style={edit}>
                {children}
            </div>
        </>
    );
};

export default RoseParent;
