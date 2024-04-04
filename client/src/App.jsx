import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Project from './pages/Project';
import DashBoard from './pages/DashBoard';
import About from './pages/About';
import Header from './componets/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/Project' element={<Project/>}/>
      <Route path='/Dashboard' element={<DashBoard/>}/>
      <Route path='/About' element={<About/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;