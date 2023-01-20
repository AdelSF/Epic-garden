import React from 'react';
import styled from 'styled-components';
import Card from '../categories/Slider.tsx';


export default function GiftShop() {


    return(
        <Container>
            <Box1>
                <Card url={"https://firebasestorage.googleapis.com/v0/b/epicurious-garden.appspot.com/o/GiftShop-5.JPG?alt=media&token=125678d4-51e1-4797-af8c-232a4d25d14f&auto=format&fit=crop&fm=jpg&ixlib=react-9.5.4&w=450&h=450&dpr=2&q=50"}/>
                <Card url={"https://firebasestorage.googleapis.com/v0/b/epicurious-garden.appspot.com/o/GiftShop-4.JPG?alt=media&token=1981efa2-723d-409a-ad29-cbc6200fc2e4&auto=format&fit=crop&fm=jpg&ixlib=react-9.5.4&w=450&h=450&dpr=2&q=50"}/>
                <Card url={"https://firebasestorage.googleapis.com/v0/b/epicurious-garden.appspot.com/o/GiftShop-8.JPG?alt=media&token=9525a840-bba5-44cb-b250-b3a7e8a2b2b9&auto=format&fit=crop&fm=jpg&ixlib=react-9.5.4&w=450&h=450&dpr=2&q=50"}/>
            </Box1>
            <Box2>
                <H2>Tibet Souvenir</H2>
                <ServiceDescription>Explore our Gift shop at the center of the garden, We tend to feel a greater sense of happiness when we see the recipient gleam with joy as they open our gift. This releases endorphins into our brain which gives us the same euphoric feelings we experience when we are falling for someone or achieving something great.
                </ServiceDescription>
                <ServiceDescription>Gifting is a mutually rewarding act, where the giver benefits as much as the receiver. Research shows that gift-giving not only makes the receiver feel happy and cared for, it also yields greater return for the giver too
                </ServiceDescription>
                <Button><ALink href='https://www.google.com/maps/place/Epicurious+Garden/@37.8798335,-122.2710551,17z/data=!3m1!4b1!4m5!3m4!1s0x80857ea13165eee9:0x87b0a87eae7ce71e!8m2!3d37.8798116!4d-122.2690607' target="_blank">Get Directions</ALink></Button>           
            </Box2>
        </Container>
    )
}



const Container = styled.div`
    width: 900px;
    border-top: 3px solid #FC5600;
    border-bottom: 3px solid #FC5600;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5rem auto;
    flex-wrap: wrap;
    @media only screen and (max-width: 900px) {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
  }
`

const Box1 = styled.div`
    border-radius: .5rem;
    background-color: #ffffff;
    margin-top: -5rem;
    width: 400px;
    flex-direction: column;
    @media only screen and (max-width: 900px) {
  }
`
const Box2 = styled.div`
    border-radius: .5rem;
    background-color: #ffffff;
    width: 450px;
    flex-direction: column;
    @media only screen and (max-width: 900px) {
        margin-top: 5rem;
        width: 100%;
  }
`

const H2 = styled.h2`
    margin: 2rem;
`

const ServiceDescription = styled.p`
    margin: 1rem 3rem;
    padding: 1rem;
    text-align: justify;
    text-justify: inter-word;
    margin-bottom: 3rem;
    border-left: 2px solid lightgray;
    border-right: 2px solid lightgray;
`

const Button = styled.button`
    border: 1px solid gray;
    padding: 10px;
    border-radius: 5px;
    margin: 2rem;
`
const ALink = styled.a`
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
`

