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
            {/* <KitchenOnFireImg>
            </KitchenOnFireImg> */}
            {/* <Parallax speed={20}>
            </Parallax> */}
            {/* <ParallaxBanner
            layers={[{ image: './../assests/design-imgs/fire-in-hands-croped-minified-min.jpg', speed: -15 }]}
        className="aspect-[2/1]"/> */}
            {/* <Parallax speed={40}>
            </Parallax> */}
            <Parallax speed={40} >
                <Title>Kitchen On Fire</Title> 
                <ImageFireInHands src={FireInHandImg} alt="kitchen image" />
                <Button><ALink href='https://www.kitchenonfire.com/' target="_blank">About The Cooking School</ALink></Button>           
            </Parallax>
        </Container>
    )
}



const Container = styled.div`
    /* max-width: 600px; */
    border-top: 5px solid black;
    border-bottom: 5px solid black;
    /* background-color: #dc4e29; */
    /* height: 600px; */
    /* position: absolute; */

`

const ImageFireInHands = styled.img`
    overflow: hidden;
    width: 100%;
    height: 100%;
    /* margin-bottom: 5rem; */
`

const KitchenOnFireImg = styled.div`
    /* min-height: 600px;  */
    /* max-width: 100%; */
    /* max-height: 100%; */
    /* max-width: 100%; */
    /* background-image: url(${FireInHandImgFullsize});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; */
    /* display: block; */
    overflow: hidden;
`
const Title = styled.h2`
    /* position: absolute; */
    padding: 20px;
    font-size: 6rem;
    color: lightgray;
    letter-spacing: 2rem;
    opacity: .5;
    font-family: 'Karantina', cursive;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
    margin: 0 auto;
    /* margin-top: 30%; */
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
    @media only screen and (max-width: 900px) {
        /* letter-spacing: 15px; */
        /* font-size: 2rem; */
        margin-bottom: -5rem;
    }
`

const ALink = styled.a`
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
`





















