import React from 'react';
import styled from 'styled-components';
// import FireInHandImg from './../assests/design-imgs/fire-in-hands-croped-minified-min.jpg'
import FireInHandImgFullsize from './../assests/design-imgs/fire-in-hand-fullsize.jpg';
import FireInHandImg from './../assests/design-imgs/fire-in-hands-croped-minified-min.jpg'
import { Parallax, useParallax, ParallaxBanner } from 'react-scroll-parallax';


export default function KitchenOnFirePrlx() {

    const { ref } = useParallax<HTMLDivElement>({ speed: 100 });

  

    return(
        <Container>
            <Parallax speed={40} >
                <Title>Kitchen On Fire</Title> 
                <Button><ALink href='https://www.kitchenonfire.com/' target="_blank">About The Cooking School</ALink></Button>           
                <ImageFireInHands src={FireInHandImg} alt="kitchen image" />
            </Parallax>
        </Container>
    )
}



const Container = styled.div`
    border-top: 5px solid black;
    border-bottom: 5px solid black;
`

const ImageFireInHands = styled.img`
    overflow: hidden;
    width: 100%;
    height: 100%;
`

const Title = styled.h2`
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
    padding: 20px;
    font-size: 6rem;
    color: lightgray;
    letter-spacing: 2rem;
    opacity: .7;
    font-family: 'Karantina';
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
    margin: 0 auto;
    @media only screen and (max-width: 900px) {
        letter-spacing: 15px;
        font-size: 2rem;
        margin: 0;
  }
  `

const Button = styled.button`
    border: 1px solid white;
    padding: 10px;
    border-radius: 5px;
    margin: .5rem;
    @media only screen and (max-width: 900px) {
        /* margin-bottom: -5rem; */
    }
`

const ALink = styled.a`
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
`





















