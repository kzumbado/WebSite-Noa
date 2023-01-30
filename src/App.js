import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Error404 } from "./pages/Error404";
import Download from "./pages/Download";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/download" element={<Download />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
