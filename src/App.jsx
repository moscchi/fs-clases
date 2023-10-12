import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ErrorPage404 from "./Pages/ErrorPage404/ErrorPage404";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
      <footer style={{position: 'absolute', bottom: 0}}>Soy el footer</footer>
    </>
  );
}

export default App;
