import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Preview builds (VITE_ROUTER_BASENAME=auto) are served from an arbitrary
// path, so the router takes the page's own path as its base. Normal builds
// leave this undefined and route from "/".
const basename =
  import.meta.env.VITE_ROUTER_BASENAME === 'auto' ? window.location.pathname.replace(/\/$/, '') : undefined

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
