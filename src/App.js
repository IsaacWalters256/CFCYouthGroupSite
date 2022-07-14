import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Events from './pages/Events';
import Objective from './pages/Objective';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/team" exact element={<Team />}/>
          <Route path="/events" exact element={<Events />}/>
          <Route path="/objective" exact element={<Objective />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
