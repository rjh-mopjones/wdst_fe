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
import '@mantine/core/styles/global.css';
import '@mantine/core/styles.css';
import './styles/styles.css';
import './styles/rsvp.css';
import './styles/registry.css';
import './styles/accommodation.css';
import './styles/navbar.css';
import '@mantine/core/styles/Accordion.css';
import FAQs from "./pages/FAQs";
import {MantineProvider, createTheme} from "@mantine/core"; // Import your CSS file


export const NotSubmittedContext = React.createContext({
    notSubmitted:true
});

export const UserNameContext = React.createContext({
    userName:""
});

const myColor = [
    '#d30690',
    '#eedfe9',
    '#debad1',
    '#cf93ba',
    '#c172a4',
    '#b95d99',
    '#b65392',
    '#a0437f',
    '#8f3a71',
    '#7e3063'
];

const theme = createTheme({
    colors: {
        myColor,
    }
});

const App = () => {
    const [notSubmitted, setNotSubmitted] = useState(NotSubmittedContext);
    const [userName, setUserName] = useState(UserNameContext);
    return (
      // TODO get drawing from eva and put it on home page
      // TODO log to server log file
      <Router>
          <div className={"page"}>
              <MantineProvider theme={theme}>
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
              </MantineProvider>
          </div>
      </Router>
  );
};

export default App;
