import React, { useMemo } from 'react';

export default function Fibonacci({ n }) {
    const fib = (num) => {
        if (num <= 1) {
            return num;
        }
        return fib(num - 1) + fib(num - 2);
    }

    const resultado = useMemo(() => fib(n), [n]);

    return (
        <div>
            <p>Fibonacci de {n} é {resultado}</p>
        </div>
    );
}
