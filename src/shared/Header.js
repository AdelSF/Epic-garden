import React, {useState} from 'react';
import Logo1 from './../assests/design-imgs/logo-1.png';
import Logo2 from './../assests/design-imgs/logo-2.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



export default function Header() {

  const [hamContent, setHamContent] = useState('☰')


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
        <BigLogo src={Logo1} alt="logo" />
        <SmallLogo src={Logo2} alt="logo" />
      </a>
      <Items displayStatus={hamContent} >

          <Item onClick={hamOnClick} to='/'>
            Home
          </Item>
          <Item onClick={hamOnClick} to='/gallery' >
            Gallery
          </Item>
          <Item onClick={hamOnClick} to='/about'>
            About
          </Item>

      </Items>
      <Ham onClick={hamOnClick}>{hamContent}</Ham>
    </Menu>
  );
}

const BigLogo = styled.img`
  width: 8rem;
  margin: 1rem;
  @media (max-width: 600px) {
    display: none;
  }
`
const SmallLogo = styled.img`
  width: 2.5rem;
  margin: 1rem;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`

const Menu = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #fddfd7; 
  @media only screen and (max-width: 600px) {
    background-color: white;
  }
`

const Items = styled.nav`
  display: flex;
    justify-content: space-around;
    align-items: center;
    width: 500px;
    margin-right: 1.5rem;
  /* margin-right: .5rem; */
    font-family: 'Karantina', cursive;
    font-size: 1.5rem;
    letter-spacing: 1px;
  @media only screen and (max-width: 600px) {
    display: ${({displayStatus}) => displayStatus === '╳' ? 'flex' : 'none' };
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 30vh;
    margin-top: 10vh;
  }
`

const Item = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: #595959;
  cursor: pointer;
  /* margin: .5rem 1rem; */
  &:hover {
      text-shadow: 0px 0px 5px black;
      color: white;
      transition: .7s;
  }
  @media only screen and (max-width: 600px) {
    border: 1px solid gray; 
    font-weight: 400;
    width: 100%;
    padding: 1rem;
    background-color: #EEE9ED;
    margin: 0 auto;
    /* margin: .4rem 1rem; */
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