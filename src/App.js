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
import { ParallaxProvider } from 'react-scroll-parallax';
import { useRef } from 'react';
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  const Services = useRef(null);
	const Gallery = useRef(null);
	const Contact = useRef(null);


  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };
  
  function handleClick(event){
    if (event === 1) {
      scrollDown(Services)
    } else if (event === 2) {
      scrollDown(Gallery)
    } else {
      scrollDown(Contact)
    }
  }

  return (
    <div className="App">
        <ScrollToTop />
        <ParallaxProvider>
        <Header handleClick={handleClick}/>
        <Landing />
        <Events />
        <AllCategories />
        <Img360One />
        <div ref={Services}>
          <AllServices />
			  </div>
        <GiftShop />
        <KitchenOnFirePrlx />
        <AboutMozhai />
        <div ref={Gallery}>
          <Galleria />
        </div>
        <div ref={Contact}>
          <Footer />
        </div>
      </ParallaxProvider>
    </div>
  );
}

export default App;
