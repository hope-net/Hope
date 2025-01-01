import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Contribute from "./Components/Contribute";
import Calculator from "./Components/Calculator";
import Mnc from "./Components/Mnc";
import Scheme2019 from "./Components/Scheme2019";
import Scheme2024 from "./Components/Scheme2024";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/mnc" element={<Mnc />} />
      <Route path="/scheme2019" element={<Scheme2019 />} />
      <Route path="/scheme2024" element={<Scheme2024 />} />
    </Routes>
  );
}
