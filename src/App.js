import React from 'react'
import Home from './Pages/Home/Home'
import Topbar from './component/TopBar/Topbar'
import Single from './Pages/Single/Single'
import Write from './Pages/Write/Write'
import Setting from './Pages/Setting/Setting'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Topbar/>
    <Routes>
      <Route path="/"   element={<Home />}/> 
         <Route path="/register" element={<Register />}/> 
         <Route path="/write" element={<Write />}/> 
         <Route path="/login" element={<Login />}/> 
         <Route path="/setting" element={<Setting />}/> 
         <Route path="post/:postId" element={<Single />}/> 
          
    </Routes>
  </BrowserRouter>
    
    </>
  )
}
