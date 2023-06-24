import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'foundation-sites/dist/css/foundation.min.css'
import './assets/app.scss'
import './assets/index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
