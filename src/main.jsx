import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// navigation
import Navigationrouter from './utils/Navigationrouter.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Navigationrouter>
     <App /> 
    </Navigationrouter>
  </React.StrictMode>,
)
