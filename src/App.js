import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Error404 } from "./pages/Error404";
import Download from "./pages/Download";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
