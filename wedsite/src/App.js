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
import './styles/accommodation.css';
import FAQs from "./pages/FAQs"; // Import your CSS file


export const NotSubmittedContext = React.createContext({
    notSubmitted:true
});

export const UserNameContext = React.createContext({
    userName:""
});


const App = () => {
    const [notSubmitted, setNotSubmitted] = useState(NotSubmittedContext);
    const [userName, setUserName] = useState(UserNameContext);
    return (
      // TODO mobile compatibility
      // TODO get drawing from eva and put it on home page
      // TODO log to server log file
      // TODO FAQs
      // TODO Accommodation
      <Router>
          <div className={"page"}>
              <NotSubmittedContext.Provider value={[notSubmitted, setNotSubmitted]}>
              <UserNameContext.Provider value={[userName, setUserName]}>
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
              </UserNameContext.Provider>
              </NotSubmittedContext.Provider>
          </div>
      </Router>
  );
};

export default App;
