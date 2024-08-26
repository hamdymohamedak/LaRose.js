import { useState } from 'react';

export default function useRand(from, to) {
    const getRandomValue = () => Math.floor(Math.random() * (to - from + 1)) + from;

    const [RandValue, setRandValue] = useState(getRandomValue());

    const refreshRandValue = () => {
        setRandValue(getRandomValue());
    };

    return [RandValue, refreshRandValue];
}


