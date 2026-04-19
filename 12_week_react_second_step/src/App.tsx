import { useState } from "react";
import { Counter } from "./components/Counter";
import { Header } from "./components/Header";
import "./index.css";

function App() {
  const [countApp, setCountApp] = useState(0);
  console.log("[App]: re-render");
  return (
    <main>
      <Header />
      <div>
        <h1>App Counter</h1>
        <button onClick={() => setCountApp(countApp + 1)}>+</button>
        <span>{countApp}</span>
      </div>
      <Counter />
    </main>
  );
}

export default App;
