import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Inject canonical tag before React renders
const canonical = document.createElement('link');
canonical.rel = 'canonical';
canonical.href = 'https://joblynk.live/';
document.head.appendChild(canonical);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
