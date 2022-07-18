import React from 'react'
import './App.css'
import ResideComp from './Components/ResideComp'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ScrollToTop from './Components/ScrolToTop/ScrolToTop'
import Signin from "./Components/SignIn"
import Signup from "./Components/SignUp/index"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop>
    <div className='MainContainer'>
    <Routes>
      <Route path='/' element={<ResideComp/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </div>
    </ScrollToTop>
    </BrowserRouter>
    </>
  )
}

export default App