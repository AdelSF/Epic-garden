import React from 'react';
import Header from './shared/Header';
import './App.css';
import Landing from './home/Landing';
import AllCategories from './categories/AllCategories';
import Img360One from './displays/Img360';
import AllServices from './services/AllServices';


function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <AllCategories />
      <Img360One />
      <AllServices />
    </div>
  );
}

export default App;
