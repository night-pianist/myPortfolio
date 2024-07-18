import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Creations from './components/Creations';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router> 
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/creations" element={<Creations />}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
