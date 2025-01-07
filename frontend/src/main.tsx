import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.tsx'
import { BrowserRouter as Router }  from 'react-router-dom'
import AppRoutes from './AppRoutes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < Router> 
    <AppRoutes />
    </Router>
  </StrictMode>,
)
