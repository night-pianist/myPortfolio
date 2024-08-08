import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Artwork from './components/Artwork';
import Programs from './components/Programs';
import CAD from './components/CAD';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router> 
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/artwork" element={<Artwork />}/>
            <Route path="/programs" element={<Programs />}/>
            <Route path="/cad-models" element={<CAD />}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
