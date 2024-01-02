import { useState, useMemo } from "react";
import { initialItems } from "../assets/initialItems";

export default function Contador() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // SEM USEMEMO
  //const selectedItem = items.find((item) => item.isSelected)
  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );
  return (
    <div>
      <h1>{count}</h1>
      <h1>Selected item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
