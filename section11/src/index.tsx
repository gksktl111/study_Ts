import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import _ from 'lodash';

//  createRoot은 null을 받지 않음으로 HTMLElement로 타입 단언
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
