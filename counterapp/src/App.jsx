import './App.css';

import Navbar from "./components/Navbar"
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Home from './components/Home';
import Counter from './components/Counter';
import Section from './components/Section';
import { Route, Routes } from 'react-router-dom';
import Type1UseEffect from './components/Type1UseEffect';
import Type2UseEffect from './components/Type2UseEffect';
import Type3UseEffect from './components/Type3UseEffect';
import Type4UseEffect from './components/Type4UseEffect';
import Params from './components/01-07/Params';
import Map from './components/01-07/Map';
import Wrapper from './components/01-07/Wrapper';
import StyledCompo from './components/01-07/StyledCompo';
import SingleProduct from './components/01-07/Singleprodct';
import DeclerativeWay from './components/01-07/DeclerativeWay';
import Xyz from "./../src/components/02-07/Xyz"
import SinglePro from './components/02-07/SinglePro';
import DynamicStyles from'./components/04-07/DynamicStyles'
import DynamicClasses from './components/04-07/DynamicClasses';
 import ChildernProp from './components/04-07/ChildernProp';






function App() {
  console.log("inside app")
  return (
    <div>
      <Routes>
      <Route exact path='/children-prop' element={<ChildernProp />} />
      <Route exact path='/dynamic-classes' element={<DynamicClasses />} />

      <Route exact path='/dynamic-styles' element={<DynamicStyles />} />
        <Route exact path='/singlePro' element={<SinglePro/>}/>
        <Route exact path='/xyz' element={<Xyz />} />
        <Route exact path='/declerative-way' element={<DeclerativeWay />} />
        <Route exact path='/single-product/:swaraj' element={<SingleProduct />} />
        <Route exact path='/styled-compo' element={<StyledCompo />} />
        <Route exact path='/wrappper' element={<Wrapper />} />
        <Route exact path='/Map' element={<Map />} />
        <Route exact path='/Params' element={<Params />} />
        <Route exact path='/Type4UseEffect' element={<Type4UseEffect />} />
        <Route exact path='/Type3UseEffect' element={<Type3UseEffect />} />
        <Route exact path='/Type2UseEffect' element={<Type2UseEffect />} />
        <Route exact path='/Type1UseEffect' element={<Type1UseEffect />} />
        <Route exact path='/changeSection' element={<Section />} />
        <Route exact path='/counter' element={<Counter />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/welcome' element={<Welcome />} />
        <Route exact path='/footer' element={<Footer />} />
        <Route exact path='/Navbar' element={<Navbar />} />
      </Routes>



    </div>
  );
}

export default App;

