import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import PollHomePage from './pages/home-page';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to= "/home"/>}/>
        <Route path="/home" element={<PollHomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
