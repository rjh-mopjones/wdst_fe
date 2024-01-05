import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Directions from './components/Directions';
import Itinerary from './components/Itinerary';
import Registry from './components/Registry';
import Accommodation from './components/Accommodation';
import RSVP from './components/RSVP';
import './styles/styles.css';
import FAQs from "./components/FAQs"; // Import your CSS file




const App = () => {
  return (
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
          </div>
      </Router>
  );
};

export default App;
