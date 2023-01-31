import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Error404 } from "./pages/Error404";
import OnLoadingPage from "./components/OnLoadingPage";
import React from "react";

const LazyHomepage = React.lazy(() => import('./pages/HomePage'));
const LazyDownload = React.lazy(() => import('./pages/Download'));
const LazyAboutUs = React.lazy(() => import('./pages/AboutUs'));
const LazyContact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<React.Suspense fallback={<OnLoadingPage />}><LazyHomepage /> </React.Suspense>} />
          <Route path="/download" element={<React.Suspense fallback={<OnLoadingPage />}><LazyDownload /> </React.Suspense>} />
          <Route path="/aboutus" element={<React.Suspense fallback={<OnLoadingPage />}><LazyAboutUs /> </React.Suspense>} />
          <Route path="/contact" element={<React.Suspense fallback={<OnLoadingPage />}><LazyContact /> </React.Suspense>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
