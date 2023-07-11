import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// navigation
import Navigationrouter from './utils/Navigationrouter';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>    
  </React.StrictMode>,
)
