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

export const ReturnMessageContext = React.createContext({
    message:""
});

export const LoadingContext= React.createContext({
   loading:false
});

export const SubmitErrorContext= React.createContext({
    error:false
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
    const [submitError, setSubmitError] = useState(SubmitErrorContext);
    const [loading, setLoading] = useState(LoadingContext);
    const [message, setMessage] = useState(ReturnMessageContext);
    return (
      <Router>
          <div className={"page"}>
              <MantineProvider theme={theme}>
              <SubmitErrorContext.Provider value={[submitError, setSubmitError]}>
              <LoadingContext.Provider value={[loading, setLoading]}>
              <NotSubmittedContext.Provider value={[notSubmitted, setNotSubmitted]}>
              <ReturnMessageContext.Provider value={[message, setMessage]}>
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
              </ReturnMessageContext.Provider>
              </NotSubmittedContext.Provider>
              </LoadingContext.Provider>
              </SubmitErrorContext.Provider>
              </MantineProvider>
          </div>
      </Router>
  );
};

export default App;
