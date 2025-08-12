// main.jsx (or index.jsx)
import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import { SpeedInsights } from "@vercel/speed-insights/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Keep App and SpeedInsights as siblings */}
    <App />
    <SpeedInsights />
  </StrictMode>,
)
