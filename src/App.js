import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { Hello } from "./components/Hello";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Login } from "./components/Login";
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
        <Route path="/users/:userid" element={<UserDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
