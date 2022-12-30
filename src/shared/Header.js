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


// const Nav = styled.nav`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   height: 60px;
//   width: 100%;
//   padding: 0.5rem 0rem;
//   background-color: #fddfd7;
// `

const Img = styled.img`
  width: 8rem;
  margin: 1rem;
`

// const HamMenu = styled.div`

// `

// const MoreDetails = styled.div`
//   padding: 2rem;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   width: 95%;
//   background: #ffffff;
//   border: 2px solid #FC5600;
//   border-top: none;
//   text-align: left;
//   @media only screen and (max-width: 600px) {
//       width: 95%;
//   }
// `

// const Links = styled.div`
  
// `
// const Ul = styled.ul`
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
// `

// const Li = styled.li`
//   list-style: none;
//   /* margin: 1rem; */
//   cursor: pointer;
//   font-family: 'Karantina', cursive;
//   font-size: 1.7rem;
//   color: #707070;

// `



const Menu = styled.header`
    display: flex;
    justify-content: space-between;
    /* border-bottom: 1px solid gray; */
    background-color: #fddfd7;

    /* background-color: black; */
`

// const Logo = styled.img`
//     height: 40px;
//     margin-left: 1.5rem;
//     @media only screen and (max-width: 600px) {
//     margin: 3%;
//   }
// `

const Items = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    margin-right: 1.5rem;
    font-family: 'Karantina', cursive;
    font-size: 1.5rem;
    color: #707070;
    letter-spacing: 1px;
    @media (max-width: 600px) {
        display: ${({displayStatus}) => displayStatus === '╳' ? 'flex' : 'none' };
        flex-direction: column;
        height: 30vh;
        margin-top: 10vh;
        width: unset;
    }
`

const Item = styled.div`
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        text-shadow: 0px 0px 5px black;
        color: white;
        transition: .7s;
    }
    @media only screen and (max-width: 600px) {
    margin-bottom: 50%;
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