// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StoreContextProvider from './Context/StoreContext'
import StoreProvider from './Context/StoreContext'

createRoot(document.getElementById('root')).render(
    <StoreProvider>
        <App />
    </StoreProvider>
)
