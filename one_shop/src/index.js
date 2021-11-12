import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { ContextProvider } from './api/context/ContextProvider'

ReactDOM.render(
  <ContextProvider>
      <App />
  </ContextProvider>,
  document.getElementById('root')
);


reportWebVitals();
