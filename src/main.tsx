import './utils/i18n';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const savedTheme = window.localStorage.getItem('cova-theme');
const initialTheme = savedTheme === 'light' ? 'light' : 'dark';
document.documentElement.classList.add(initialTheme);
document.documentElement.dataset.theme = initialTheme;
document.documentElement.style.colorScheme = initialTheme;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
