import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/global/Navbar';
import Login from './Component/Login';
import Register from './Component/Register';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path='/'element={<Home/>}/>
      <Route exact path='login' element={<Login/>}/>
      <Route exact path='register'element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;



