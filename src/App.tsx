import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router> 
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
