import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { Hello } from "./components/Hello";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Users } from "./components/Users";
import { ProductDetails } from "./components/ProductDetails";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hello />} />

        <Route path="/about" element={<About />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}
