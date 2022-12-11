import { useState } from "react";
import React from 'react';
import "./header.css";
import Logo from './../assests/design-imgs/logo-1.png'

export default function Header() {
  // const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <img className="logo" src={Logo} alt="logo" />
      </a>
    </nav>
  );
}
