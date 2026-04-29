import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css'
import UserMovie from './components/UserMovie.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UserMovie />
  </StrictMode>,
)
