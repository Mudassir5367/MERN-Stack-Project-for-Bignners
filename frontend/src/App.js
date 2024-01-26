import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate
  // Link,
  // useRouteMatch,
} from "react-router-dom";
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <Navbar/>
      <div>
        <Routes>
          <Route path='/' element = {<Home/>}/> 
          <Route path='/contact' element = {<ContactUs/>}/>
          <Route path='/about' element = {<AboutUs/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/signup' element = {<Signup/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
