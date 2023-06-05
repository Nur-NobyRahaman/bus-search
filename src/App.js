import './App.css';
import Home from './component/Home/Home';
import app from './firebase.init';
import {getAuth} from 'firebase/auth'
function App() {
  const auth = getAuth(app)
  return (
    <div className="App">
      <Home></Home>
      
    </div>
  );
}

export default App;
