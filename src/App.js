import React from 'react';
import Header from './shared/Header';
import './App.css';
import Landing from './home/Landing';
import AllCategories from './categories/AllCategories';
import Img360One from './displays/Img360';
import AllServices from './services/AllServices';
import KitchenOnFirePrlx from './services/KitchenOfFirePrlx';
import Footer from './shared/Footer';
import AboutMozhai from './services/AboutMozhai';
import Galleria  from './gallery/Galleria';
import Events from './events/Events';
import GiftShop from './services/GiftShop';


function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Events />
      <AllCategories />
      <Img360One />
      <AllServices />
      <GiftShop />
      <KitchenOnFirePrlx />
      <AboutMozhai />
      <Galleria />
      <Footer />
    </div>
  );
}

export default App;
