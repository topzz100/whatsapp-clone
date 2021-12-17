import './App.css';
import SideBar from './components/SideBar';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <div className = "app-content">
        {/* side-bar */}
        <SideBar/>
        {/* chat */}
        <Chat/>
      </div>
    
    </div>
  );
}

export default App;
