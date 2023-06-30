import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar"
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Home from './components/Home';
import Counter from'./components/Counter';
import Section from './components/Section';
import { Route, Routes } from 'react-router-dom';
import Type1UseEffect from './components/Type1UseEffect';
import Type2UseEffect from './components/Type2UseEffect';
import Type3UseEffect from'./components/Type3UseEffect';




function App(){
 console.log("inside app")
  return (
    <div>
      <Routes>
        <Route exact path='/Type3UseEffect' element={<Type3UseEffect/>}/>
      <Route exact path='/Type2UseEffect' element={<Type2UseEffect />} />
      <Route exact path='/Type1UseEffect' element={<Type1UseEffect />} />
      <Route exact path='/changeSection' element={<Section />} />
      <Route exact path='/counter' element={<Counter />} />
      <Route exact path='/' element={<Home />} />
      <Route exact path='/welcome' element={<Welcome/>} />
      <Route exact path='/footer' element={<Footer/>} />
      <Route exact path='/Navbar'element={ <Navbar/>}/>
      </Routes>
  
     
    
    </div>
  );
}

export default App;

