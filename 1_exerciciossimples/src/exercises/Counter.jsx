import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1> Exercício 1</h1>
        <p>Você clicou {count} vezes</p>
        <button onClick={() => setCount(count + 1)}>Clique aqui!</button>
        </div>
    )
}