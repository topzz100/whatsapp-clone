import './App.css';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';
import Login from './components/Login';

function App() {
  const[user, setUser] = useState(null)

  return (
    <Router>
    
      <div className="App">
        {!user ? (
          <Login/>
        ) : (
          <div className = "app-content">
        <SideBar/>
          <Routes>
            <Route path = '/rooms/:roomId' element = {<Chat/>}/>
            <Route path = '/' />
          </Routes>
       
     
      </div>
        )}
      
    
    </div>
    </Router>
    
  );
}

export default App;
