import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Home from './components/Home';
import Login from "./components/Login"
import Signup from "./components/Signup"
import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" exact element={<Landingpage/>}>
        </Route>
        <Route path="/Home" element={<Home/>}>
        </Route>
        <Route path="/Login" element={<Login/>}>
        </Route>
        <Route path="/Signup" element={<Signup/>}>
        </Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}>
        </Route>
      </Routes>

      <Footer/>
    </Router>
    </>
  );
}

export default App;
