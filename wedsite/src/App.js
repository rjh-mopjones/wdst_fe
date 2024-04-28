import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Directions from './pages/Directions';
import Itinerary from './pages/Itinerary';
import Registry from './pages/Registry';
import Accommodation from './pages/Accommodation';
import RSVP from './pages/RSVP';
import './styles/styles.css';
import './styles/rsvp.css';
import FAQs from "./pages/FAQs"; // Import your CSS file


export const NotSubmittedContext = React.createContext({
    notSubmitted:true
});



const App = () => {
    const [notSubmitted, setNotSubmitted] = useState(NotSubmittedContext);
    return (
      // TODO mobile compatibility
      // TODO get drawing from eva and put it on home page
      // TODO itinerary page put pic there (tbc but arrival by 12:30)
      // TODO drections: parking available onsite
      // TODO log to server log file
      // TODO add flags for RSVP
      <Router>
          <div className={"page"}>
              <NotSubmittedContext.Provider value={[notSubmitted, setNotSubmitted]}>
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
              </NotSubmittedContext.Provider>
          </div>
      </Router>
  );
};

export default App;
