import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error404 } from "./pages/Error404";
import OnLoadingPage from "./components/OnLoadingPage";
import React, { useState, useCallback, useContext, useEffect } from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { UserContext } from './context/UserContext';
import { auth } from './config/firebase';
import { store } from "./store/store";
import { startLoadingNews } from "./store/news/thunks";

const LazyHomepage = React.lazy(() => import('./pages/HomePage'));
const LazyDownload = React.lazy(() => import('./pages/Download'));
const LazyAboutUs = React.lazy(() => import('./pages/AboutUs'));
const LazyContact = React.lazy(() => import('./pages/Contact'));
const LazyLogin = React.lazy(() => import('./pages/LoginPage'));
const LazyAdminDashboard = React.lazy(() => import('./pages/AdminDashboard'));

function App() {
  const [isUser, setIsUser] = useState(false);
  const darkmode = useSelector(state => state.isDarkmode);

  onAuthStateChanged(auth, useCallback(async (userLogged) => {
    if (userLogged) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, []));


  

  
  

  return (
    <div className={`App bg-background dark:bg-backgroundNight ${darkmode ? "dark":""}`}>
      <UserContext.Provider value = {{isUser, darkmode}}>

        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<React.Suspense fallback={<OnLoadingPage />}>{!isUser ? <LazyHomepage /> : <LazyAdminDashboard />} </React.Suspense>} />
              <Route path="/download" element={<React.Suspense fallback={<OnLoadingPage />}><LazyDownload /> </React.Suspense>} />
              <Route path="/aboutus" element={<React.Suspense fallback={<OnLoadingPage />}><LazyAboutUs /> </React.Suspense>} />
              <Route path="/contact" element={<React.Suspense fallback={<OnLoadingPage />}><LazyContact /> </React.Suspense>} />
              <Route path="/admin" element={<React.Suspense fallback={<OnLoadingPage />}><LazyLogin /> </React.Suspense>} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </BrowserRouter>

        </Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
export const UserAuth = () => {
  return useContext(UserContext);
}
