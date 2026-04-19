import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  console.log("[Counter]: re-render");
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
    </div>
  );
}
