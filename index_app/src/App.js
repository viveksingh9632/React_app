// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Service from "./Components/Service";
import About from "./Components/About";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route exact path="home" element={<Home />} />
          <Route exact path="service" element={<Service />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
