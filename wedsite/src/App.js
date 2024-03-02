import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Directions from './pages/Directions';
import Itinerary from './pages/Itinerary';
import Registry from './pages/Registry';
import Accommodation from './pages/Accommodation';
import RSVP from './pages/RSVP';
import './styles/styles.css';
import FAQs from "./pages/FAQs"; // Import your CSS file




const App = () => {
  return (
      // TODO arrows move tabs
      // TODO rsvp forms (auth, rsvp)
      // TODO mobile compatibility
      // TODO sunset active navbar
      <Router>
          <div className={"page"}>
              <Navbar/>
              <div className="content">
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/itinerary" element={<Itinerary/>} />
                      <Route path="/directions" element={<Directions/>} />
                      <Route path="/accommodation" element={<Accommodation/>} />
                      <Route path="/registry" element={<Registry/>} />
                      <Route path="/faqs" element={<FAQs/>} />
                      <Route path="/rsvp" element={<RSVP/>} />
                  </Routes>
              </div>
              <div className={"footer"}>
              </div>
          </div>
      </Router>
  );
};

export default App;
