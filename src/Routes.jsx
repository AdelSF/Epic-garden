import React from "react"
import { BrowserRouter as Router, useRoutes, BrowserRouter } from 'react-router-dom'
import Galleria from './gallery/Galleria'
import Landing from './home/Landing'
import Header from './shared/Header'
import Footer from './shared/Footer'
import About from './about/About'



const AllRoutes = () => { 
    const routes = useRoutes([
      { path:"/gallery", element:<Galleria /> },
      { path:"/about", element:<About /> },
      { path:"/", element:<Landing />}
    ])
    return routes
  }

  const AppWrapper = () => {
    return (
      <Router history={BrowserRouter}>
        <Header />
        <AllRoutes />
        <Footer />
      </Router>
    )
  }
  
  export default AppWrapper