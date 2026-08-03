import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter}  from 'react-router-dom'
import context from './MainContext.jsx'
import Assingment from './Assingment.jsx'


createRoot(document.getElementById('root')).render(
    // <BrowserRouter>
    // <context.Provider value={{name:"Shashikant", age:21}}>  
    // <Assingment />
    // </context.Provider>
    // </BrowserRouter>
    <App />

)