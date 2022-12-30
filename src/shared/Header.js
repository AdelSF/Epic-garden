import React from 'react';
import Logo from './../assests/design-imgs/logo-1.png';
import styled from 'styled-components';







export default function Header({handleClick}) {

  return (
    <Nav>
      <a href="/">
        <Img src={Logo} alt="logo" />
      </a>
      <Links>
				<Ul>
					<Li className="link" onClick={() => handleClick(1)}>
						Services
					</Li>
					<Li className="link" onClick={() => handleClick(2)}>
						Gallery
					</Li>
					<Li className="link" onClick={() => handleClick(3)}>
						Contact
					</Li>
				</Ul>
			</Links>
    </Nav>
  );
}


const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
    height: 60px;
    width: 100%;
    padding: 0.5rem 0rem;
    background-color: #fddfd7;
`

const Img = styled.img`
  width: 8rem;
  margin: 1rem;
`

const Links = styled.div`
  
`
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const Li = styled.li`
  list-style: none;
  margin: 1rem;
  cursor: pointer;
  font-family: 'Karantina', cursive;
  font-size: 1.7rem;
  color: #707070;

`