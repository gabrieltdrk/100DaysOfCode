import "./App.css";
import Contador from "./components/Contador";
import Fetching from "./components/Fetching";

export default function App() {
  return (
    <>
      <div>
        <h1>Exercício 1</h1>
        <Fetching id={1} />
        <Fetching id={2} />
        <Fetching id={3} />
      </div>
      <div>
        <h1>Exercício 2</h1>
        <Contador />
      </div>
    </>
  );
}
