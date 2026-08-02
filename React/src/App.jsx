import React from 'react'
import Counter from './class1/Counter.jsx'
import UseEffectDemo from './class2/UseEffectDemo.jsx'
import NavBar from './class3/NavBar.jsx'
import Home from './class3/Home.jsx'
import About from './class3/About.jsx'
import Contact from './class3/Contact.jsx'
import ProductList from './class3/ProductList.jsx'
import ProductDetails from './class3/ProductDetails.jsx'
import A from './class3/A.jsx'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

const App = () => {
  
  return (
    <div>
      {/* <StateExample/> */}
      {/* <UseEffectDemo/> */}
      {/* <NavBar/>
       <Routes>
        <Route  path='/'   element={<Home/>}/>
        <Route  path='/about'   element={<About/>}/>
        <Route  path='/contact'   element={<Contact/>}/>
        <Route  path='/list'   element={<ProductList/>}/>
        <Route  path='/product/:id'   element={<ProductDetails/>}/>

       </Routes> */}
       <A />

    </div>
  )

  
}

export default App


