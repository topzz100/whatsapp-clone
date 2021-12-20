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
import {useStateValue} from './components/AppProvider'

function App() {
  const[{user}, dispatch] = useStateValue()

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
