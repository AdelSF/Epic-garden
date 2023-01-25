import React from 'react';
import styled from 'styled-components';
import Epic from '../assests/design-imgs/Epicurious-min.png'
import Trees from '../assests/design-imgs/treesImg.png'



export default function Landing() {

    return(
        <Container>
            <LeftBox>
                <EpicuriousImg src={Epic} alt='Epicurious' />
                <EpicuriousInfo>Epicurus, Greek Philosopher 341, BC</EpicuriousInfo>
                <EpicuriousQoute>“The key to true happiness is centered around food, garden and friendship.”</EpicuriousQoute>
            </LeftBox>
            <RightBox>
                <Div1>
                    <H4>Welcome to</H4>
                    <TreeImg src={Trees} alt='Trees' />
                </Div1>
                <H2>Epicurious Garden</H2>
                <TitleP>Your one-stop shop for take out or hanging out</TitleP>
            </RightBox>
        </Container>
    )
}



const Container = styled.div`
    background-color: #fddfd7;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`

const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 500px) {
        height: 32rem;
  }
`
const RightBox = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 500px) { // equal or less to 500px
        margin: 0 auto;
  }
`

const EpicuriousImg = styled.img`
    margin: 0 auto;
    width: 250px;
    align-self: center;
    @media only screen and (max-width: 500px) {
        width: 300px;
        /* height: 300px; */
    }
    @media only screen and (max-width: 350px) {
        width: 250px;
        height: 250px;
    }
`

const EpicuriousInfo = styled.h2`
    margin: 0;
    padding: 0;
`
const EpicuriousQoute = styled.p`
    font-weight: 600;
`

const Div1 = styled.div`
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 500px) {
        margin: 0 auto;
  }
`
const TreeImg = styled.img`
    padding: 3rem 0 0 2rem;
    text-align: right;
    @media only screen and (max-width: 700px) {
    display: none;
  }
`

const H2 = styled.h2`
    font-size: 5rem;
    color: #FC5600;
    text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
    text-align: left;
    margin-top: -10px;
    margin-bottom: 0;
    @media only screen and (max-width: 700px) {
        font-size: 3rem;
        margin: .6rem 1rem;
        text-align: center;
    }
`

const H4 = styled.h4`
    color: #FFE4E4;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
    font-size: 3rem;
    display: flex;
    align-items: flex-end;
    margin: 0;
    padding: 0;
    @media only screen and (max-width: 700px) {
        font-size: 1.6rem;
        margin: 0 auto;
        text-align: center;
    }
`
const TitleP = styled.p`
    font-size: 2.2rem;
    text-align: left;
    margin-top: -2px;
    padding: 0 10px;
    font-family: 'Karantina', cursive;
    color: gray;
    letter-spacing: 5.5px;
    @media only screen and (max-width: 700px) { 
        letter-spacing: 3.5px;
    font-size: 1.5rem;
    text-align: center;
  }
`

