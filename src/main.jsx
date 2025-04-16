import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cartao from './Components/Cartao.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cartao />
  </StrictMode>,
)
