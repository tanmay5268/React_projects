import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LoadingProvider } from './Context/LoadingContext.jsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoadingProvider>
        <App />
    </LoadingProvider>
  </StrictMode>,
)
