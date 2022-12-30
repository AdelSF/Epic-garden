import React, {useState} from 'react';
import Logo from './../assests/design-imgs/logo-1.png';
import styled from 'styled-components';


export default function Header({handleClick}) {

  const [hamContent, setHamContent] = useState('☰')
  const [open, setOpen] = useState('none')


  function hamOnClick() {
      if (hamContent === '☰') {
          setHamContent('╳')
      } else {
          setHamContent('☰')
      }
  }

  return (
    <Menu>
      <a href="/">
        <Img src={Logo} alt="logo" />
      </a>
      <Items displayStatus={hamContent} >

              <Item onClick={() => handleClick(1)}>
                Services
              </Item>
              <Item onClick={() => handleClick(2)}>
                Gallery
              </Item>
              <Item onClick={() => handleClick(3)}>
                Contact
              </Item>

        </Items>
        <Ham onClick={hamOnClick}>{hamContent}</Ham>
    </Menu>
  );
}

const Img = styled.img`
  width: 8rem;
  margin: 1rem;
`

const Menu = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #fddfd7;  
`

const Items = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  margin-right: .5rem;
  font-family: 'Karantina', cursive;
  font-size: 1.5rem;
  letter-spacing: 1px;
  @media (max-width: 600px) {
    display: ${({displayStatus}) => displayStatus === '╳' ? 'flex' : 'none' };
    flex-direction: column;
    height: 30vh;
    margin-top: 2vh;
    width: unset;
    position: absolute;
    right: 0;
    top: 2rem;
  }
`

const Item = styled.div`
  text-decoration: none;
  font-weight: 500;
  padding: 5px;
  cursor: pointer;
  width: 60px;
  &:hover {
      text-shadow: 0px 0px 5px black;
      color: white;
      transition: .7s;
  }
  @media only screen and (max-width: 600px) {
    background-color: #feece7;
    border: 1px solid gray;
    border-radius: 5px;
  }
`

const Ham = styled.span`
  color: black;
  font-size: 2rem;
  margin: 10px 20px;
  @media (min-width: 600px) {
      display: none;
  }
`