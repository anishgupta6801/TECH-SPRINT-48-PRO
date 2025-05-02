import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './preload.js'; // Ensure dependencies are loaded correctly
import { AuthProvider } from './context/AuthContext';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Failed to find the root element');
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <AuthProvider>
          <App />
        </AuthProvider>
      </StrictMode>
    );
    console.log('App rendered successfully');
  } catch (error) {
    console.error('Error rendering the app:', error);
    // Display a visible error on the page
    rootElement.innerHTML = `
      <div style="padding: 20px; color: red; text-align: center;">
        <h2>Failed to load the application</h2>
        <p>Please check the console for more details.</p>
        <pre>${error instanceof Error ? error.message : String(error)}</pre>
      </div>
    `;
  }
}
