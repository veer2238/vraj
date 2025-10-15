import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Typewriter from "typewriter-effect";
import ScrollToTop from "react-scroll-to-top";
import Service from './Service';
import Header from './Header/Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      {/* <Typewriter
options={{
strings: ['Hello', 'World',"dcndjcn"],
autoStart: true,
loop: true,
}}
/> */}
<Header/>
<ScrollToTop smooth  />
      <Routes>
 <Route path='/' element={<Home/>} />

  <Route path='/about' element={<About/>} />
   <Route path='/service' element={<Service/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
