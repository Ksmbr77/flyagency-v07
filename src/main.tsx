
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';

// Create root once
const rootElement = document.getElementById("root");

if (rootElement) {
  // Use StrictMode in development only
  if (process.env.NODE_ENV === 'production') {
    createRoot(rootElement).render(<App />);
  } else {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
}
