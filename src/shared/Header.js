import React from 'react';
import "./header.css";
import Logo from './../assests/design-imgs/logo-1.png'
import { useRef } from 'react';
import ScrollToTop from '../hooks/ScrollToTop';
import { MdArrowDropDownCircle } from 'react-icons/md';

export default function Header({handleClick}) {
  // const [isNavExpanded, setIsNavExpanded] = useState(false);

	// const scrollDown = (ref) => {
	// 	window.scrollTo({
	// 		top: ref.current.offsetTop,
	// 		behavior: 'smooth',
	// 	});
	// };



  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <img className="logo" src={Logo} alt="logo" />
      </a>
      <div className="#">
				<ul className="nav-links">
					{/* <li className="link" onClick={() => scrollDown(aboutSection)}> */}
					<li className="link" onClick={() => handleClick(1)}>
						Services
					</li>
					<li className="link" onClick={() => handleClick(2)}>
						Gallery
					</li>
					<li className="link" onClick={() => handleClick(3)}>
						Contact
					</li>
				</ul>
			</div>
      {/* <botton>
        <a href="#">food</a>
        <a href="services">services</a>
        <a href="#">Gallery</a>
      </botton> */}
    </nav>
  );
}
