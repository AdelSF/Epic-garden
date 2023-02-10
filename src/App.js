import React from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollToTop from './hooks/ScrollToTop';
import AppWrapper from './Routes';



function App() {

  return (
    <div className="App">
        <ScrollToTop />
        <ParallaxProvider>
        <AppWrapper />
      </ParallaxProvider>
    </div>
  );
}

export default App;
