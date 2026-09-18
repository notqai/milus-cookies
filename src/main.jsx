import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Router base follows Vite's base so the app works from a sub-path
// (e.g. GitHub Pages at /milus-cookies/). VITE_ROUTER_BASENAME=auto takes the
// page's own path instead, for previews served from an unknown location.
const basename =
  import.meta.env.VITE_ROUTER_BASENAME === 'auto'
    ? window.location.pathname.replace(/\/$/, '')
    : import.meta.env.BASE_URL.replace(/\/$/, '') || undefined

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
