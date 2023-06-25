import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar"
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div>

      <Home/>
      <Footer/>
      <Navbar/>
    <Welcome/>
    </div>
  );
}

export default App;

