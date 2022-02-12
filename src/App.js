import './App.css';
import Timeline from "./components/timeline/Timeline";
import Navbar from "./components/nav-bar/Navbar";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
