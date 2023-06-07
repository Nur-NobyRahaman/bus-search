import { Route, Router, Routes } from 'react-router';
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import app from './firebase.init';
import Login from './component/Login/Login'
import {getAuth} from 'firebase/auth'
import Register from './component/Register/Register';



function App() {
  const auth = getAuth(app)
  return (
    <div className="App">
      <Home></Home>
      <Routes>
        <Route path='/'   element={<Home/>} ></Route>
        {/* <Route path='/services'   element={<Services/>} ></Route> */}
        <Route path='/login'   element={<Login/>} ></Route>
        <Route path='/register'   element={<Register/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
