import './App.css';
import Timeline from "./components/timeline/Timeline";
import Navbar from "./components/nav-bar/Navbar";
import Profile from "./components/profile/Profile";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="app">
      <Navbar/>
        <Timeline/>
    </div>
  );
}

export default App;
