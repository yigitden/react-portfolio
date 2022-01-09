import Projects from "./Projects";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
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
