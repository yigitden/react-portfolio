import Projects from "./components/Projects";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>

        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>

        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>


      </BrowserRouter>


    </div>
  );
}

export default App;
