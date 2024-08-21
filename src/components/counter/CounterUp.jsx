import React, { useEffect, useState } from 'react';

export default function CounterUp({ start, end, time, size }) {
  const [number, setNumber] = useState(start);

  useEffect(() => {
    if (number < end) {
      const timer = setTimeout(() => {
        setNumber(prevNumber => prevNumber + 1);
      }, time);

      return () => clearTimeout(timer);
    }
  }, [number, end, time]);

  useEffect(() => {
    setNumber(start);
  }, [start]);

  return (
    <div style={{ fontSize: `${size}rem` }}>{number}</div>
  );
}
