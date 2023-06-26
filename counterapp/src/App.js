import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar"
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Home from './components/Home';
import Counter from'./components/Counter';
import Section from './components/Section';
import { Route, Routes } from 'react-router-dom';



function App(){
 console.log("inside app")
  return (
    <div>
      <Routes>
      <Route exact path='/changeSection' element={<Section />} />
      <Route exact path='/counter' element={<Counter />} />
      <Route exact path='/' element={<Home />} />
      <Route exact path='/welcome' element={<Welcome/>} />
      <Route exact path='/footer' element={<Footer/>} />
      </Routes>
  
      <Navbar/>
    
    </div>
  );
}

export default App;

