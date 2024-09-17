import { useEffect, useState } from 'react';

export const useRenderTime = () => {
    const [renderTime, setRenderTime] = useState(null);

    useEffect(() => {
        const startTime = performance.now();

        // Perform the measurement after the next paint
        requestAnimationFrame(() => {
            const endTime = performance.now();
            setRenderTime(endTime - startTime); // Calculate render time in milliseconds
        });
    }, []); // Run only once on mount

    return renderTime;
};
