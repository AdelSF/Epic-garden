import React from 'react';
import Header from './shared/Header';
import './App.css';
import Landing from './home/Landing';
import AllCategories from './categories/AllCategories';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <AllCategories />
    </div>
  );
}

export default App;
