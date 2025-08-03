import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { searchCompanies } from './api'
import { RouterProvider } from 'react-router-dom'
import React from 'react'
import { router } from './Routers/Routes'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

console.log(searchCompanies("tsla"));
