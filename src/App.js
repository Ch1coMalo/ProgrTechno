import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from 'react-router-dom';

import Doctors from './pages/Doctors.js';
import {Analyses} from './pages/Analyses';
import {Home} from './pages/Home';
import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/doctors" element={<Doctors/>} />
          <Route path="/analyses" element={<Analyses/>} />
          <Route path="/step1" element={<Step1/>} />
          <Route path="/step2" element={<Step2/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      </>
      );
}
export default App;
