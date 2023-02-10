import React from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollToTop from './hooks/ScrollToTop';
import AppWrapper from './Routes';
import { HashRouter } from 'react-router-dom'


function App() {

  return (
    <div className="App">
        <ScrollToTop />
        <ParallaxProvider>
        {/* <HashRouter> */}
          <AppWrapper />
        {/* </HashRouter> */}
      </ParallaxProvider>
    </div>
  );
}

export default App;
