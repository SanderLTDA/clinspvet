import './styles/global.css';
import './styles/custom.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes';

const element = document.getElementById('root') as HTMLDivElement;

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
