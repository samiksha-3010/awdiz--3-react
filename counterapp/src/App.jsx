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
import DynamicStyles from './components/04-07/DynamicStyles'
import DynamicClasses from './components/04-07/DynamicClasses';
import ChildernProp from './components/04-07/ChildernProp';
import FromOne from './../src/components/06-07/FromOne';
import FromSingleState from'./components/08-07/FromSingleState';
import UseCallback from './components/08-07/UseCallback';
import UseMemo from './components/09-07/UseMemo'
import UseReduser from './components/09-07/UseReduser';
import ProductFormBackend from'./components/11-07/ProductFormBackend'
import Product from './components/13-07/Product';
import Login from './components/15-07/Login';
import Register from './components/15-07/Register';
import CartSection from './components/15-07/CartSection';
import Pratice from './components/practice  -  18/Pratice';
import Profile from './components/22-07/Profile';
import Counter2 from './components/Counter2';

// *****************

import UseEffect from './components/SecondPratice/UseEffect';
import UseEffect2 from './components/SecondPratice/UseEffect2';
import UseEffect3 from './components/SecondPratice/UseEffect3';
import UseEffect4 from './components/SecondPratice/UseEffect4';
import UseParam from './components/SecondPratice/UseParam';
import DynamicRouting from './components/SecondPratice/DynamicRouting';
import StyleComponenet from './components/SecondPratice/StyleComponenet';
import PropsMaps from './components/SecondPratice/PropsMaps';
import MapObject from './components/SecondPratice/MapObject';

function App() {

  const [myName, setMyName] = useState("Awdiz")

  const [students, setStudents] = useState([{ image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1wQLZqIhYASivJhwDTSzAD7sN-N9w-3sCQKc4XrV8wIgFwsB-Sb_RRqKe3akMfSPxiA&usqp=CAU', name: "virat", marks: "100" }, { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1wQLZqIhYASivJhwDTSzAD7sN-N9w-3sCQKc4XrV8wIgFwsB-Sb_RRqKe3akMfSPxiA&usqp=CAU", name: "rahul", marks: "100" }, { name: "rohit", marks: "100", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1wQLZqIhYASivJhwDTSzAD7sN-N9w-3sCQKc4XrV8wIgFwsB-Sb_RRqKe3akMfSPxiA&usqp=CAU" }]);


  function ChangeName() {
    setMyName("Awdiz Institute.")
  }
}
// import UseEffect from './components/SecondPratice/UseEffect2';





 




function App() {
  console.log("inside app")
  return (
    <div>
        <Navbar/>
      <Routes>
      
        <Route exact path='Profile' element ={<Profile/>}/>
        <Route exact path='Register' element={<Register/>}/>
        <Route exact path='cartsection' element={<CartSection/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/product/:id' element={<Product />}/>
        <Route exact path='/product-from-backend' element={<ProductFormBackend/>}/> 
        <Route exact path='use-reducer' element={<UseReduser/>}/>
        <Route exact path='use-memo' element={<UseMemo/>}/> 
        <Route exact path='/use-callback' element={<UseCallback />} />
        <Route exact path='from-single-state' element={<FromSingleState/>}/>
        <Route exact path='/form-one' element={<FromOne/> }/>
        <Route exact path='/children-prop' element={<ChildernProp />} />
        <Route exact path='/dynamic-classes' element={<DynamicClasses />} />
        <Route exact path='/dynamic-styles' element={<DynamicStyles />} />
        <Route exact path='/singlePro' element={<SinglePro/>} />
        <Route exact path='/xyz' element={<Xyz />}/>
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
        <Route exact path='/changeSection' element={<Section/>} />
        <Route exact path='/counter' element={<Counter/>} />
        <Route exact path='/home' element={<Home />}/>
        <Route exact path='/welcome' element={<Welcome />}/>
        <Route exact path='/pratice'element= {<Pratice/>} />


      {/* ********************second Pratice******************** */}
      <Route exact path='/counter2'element= {<Counter2/>} />
      <Route exact path='useEffectHook'element= {<UseEffect/>}/>
      <Route exact path='useEffect2'element= {<UseEffect2/>}/>
      <Route exact path='useEffect3'element={<UseEffect3/>}/>
      <Route exact path='useEffect4'element={<UseEffect4/>}/>
      <Route exact path='UseParams/:name'element={<UseParam/>}/>
      <Route exact path='Dynamic-Routing'element={<DynamicRouting/>}/>
      <Route exact path='style-componenent' element={<StyleComponenet/>}/>
      <Route exact path='Props-Maps'element={<PropsMaps  kuchbhi={myName} myAge="25" ChangeName={ChangeName} myStudents={["krish", "jay", "shahbaj", "shrusti", "adesh"]}/>}/>
      <Route exact path='Map-Object'element={<MapObject myStudentsData={students}/>}/>

      DynamicRouting



  
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;

