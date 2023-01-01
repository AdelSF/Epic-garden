import React, {useState} from 'react';
import Logo1 from './../assests/design-imgs/logo-1.png';
import Logo2 from './../assests/design-imgs/logo-2.png';
import styled from 'styled-components';


export default function Header({handleClick}) {

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
    flex-direction: row;
    font-size: 1.3rem;
    margin-right: .3rem;

    /* height: 30vh; */
    /* margin: 1rem; */
    width: unset;
    position: absolute;
    right: 4rem;
    top: 1rem;
  }
`

const Item = styled.div`
  text-decoration: none;
  font-weight: 500;
  /* padding: 5px; */
  cursor: pointer;
  /* width: 40px; */
  margin: .5rem 1rem;
  &:hover {
      text-shadow: 0px 0px 5px black;
      color: white;
      transition: .7s;
  }
  @media only screen and (max-width: 600px) {
    /* background-color: #feece7; */
    /* border: 1px solid gray; */
    /* justify-content: space-around; */
    border-radius: 5px;
    font-weight: 400;
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