import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'

const rootEl = document.getElementById('root');
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <BrowserRouter>
        <div className='max-w-[600px] mx-auto'>
          <App />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error('❌ Root element with id="root" not found');
}