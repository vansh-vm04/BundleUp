import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ModalProvider } from './context/ModalContext.tsx'
import { SidebarProvider } from './context/SidebarContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ModalProvider>
    <SidebarProvider>
    <App />
    </SidebarProvider>
    </ModalProvider>
    </BrowserRouter>
  </StrictMode>,
)
