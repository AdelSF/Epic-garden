import React from 'react';
import styled from 'styled-components';
import FireInHandImg from './../assests/design-imgs/fire-in-hands-croped.jpg'


export default function KitchenOnFirePrlx() {


    return(
        <Container>
            <KitchenOnFireImg>
                <Title>Kitchen On Fire</Title> 
                <Button><ALink href='https://www.kitchenonfire.com/' target="_blank">About The Cooking School</ALink></Button>           
            </KitchenOnFireImg>
        </Container>
    )
}



const Container = styled.div`
    border-top: 5px solid black;
    border-bottom: 5px solid black;
`

const KitchenOnFireImg = styled.div`
    min-height: 600px; 
    width: 100%;
    background-image: url(${FireInHandImg});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    overflow: hidden;
`
const Title = styled.h2`
    padding: 20px;
    font-size: 6rem;
    color: lightgray;
    letter-spacing: 2rem;
    opacity: .5;
    font-family: 'Karantina', cursive;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
    margin: 0 auto;
    margin-top: 30%;
`

const Button = styled.button`
    border: 1px solid white;
    padding: 10px;
    border-radius: 5px;
`

const ALink = styled.a`
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
`





















