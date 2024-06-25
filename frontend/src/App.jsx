import React from 'react'
import Home from './home/HomePage'
import Course from './components/Course'
import {Route , Routes} from "react-router-dom";
import CoursesPage from './courses/CoursesPage';
import SignUp from './components/SignUp';





function App() {
  return (
    <>
     {/* <Home/>
     <Course/> */}
  
     <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/course' element = {<CoursesPage/>} />
      <Route path='/signup' element ={<SignUp/>}/>
     </Routes>
    
    </>
  )
}

export default App
