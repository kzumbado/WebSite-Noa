import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';

import { Provider, useDispatch } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { startLoadingNews } from './store/news/thunks';

const store = createStore(() => ({
  isDarkmode: JSON.parse(localStorage.getItem('isDarkmode')),
}));


const userLng= navigator.language;
let setLng="";

if(userLng==="es-ES"){
    setLng="es"
}
else{
  setLng="en"
}

i18next.init({
    interpolation:{ escapeValue:false},
    lng:setLng,
    resources:{
      es: {
        global:global_es
      },
      en: {
        global:global_en
      },
    }

})


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <App />
    </Provider>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
