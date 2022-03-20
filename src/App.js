import "./styles.css";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={"Hello"} />
        <Route path="/about" element={"About"} />
      </Routes>
    </div>
  );
}
