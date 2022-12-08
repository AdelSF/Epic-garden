import React from 'react';
import styled from 'styled-components';
import Epic from '../assests/design-imgs/small-epic.jpg'
import BackgroundImg from '../assests/design-imgs/BG-1.jpg'
import Trees from '../assests/design-imgs/treesImg.png'
// import Trees from '../assests/people-in-garden.jpg'



export default function Landing() {

    return(
        <Container>
            <LeftBox>

                {/* <BGImg src={BackgroundImg} alt='Epicurious' />˝ */}
                <EpicuriousImg src={Epic} alt='Epicurious' />
            </LeftBox>
            <RightBox>
                <Div1>
                    <H4>Welcome to</H4>
                    <TreeImg src={Trees} alt='Trees' />
                </Div1>
                <H2>Epicurious Garden</H2>
                <TitleP>Your one-stop-shop for takeout or hanging out</TitleP>
            </RightBox>
        </Container>
    )
}



const Container = styled.div`
    /* height: 30rem; */
    background-color: #fddfd7;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`

const P = styled.p`
    color: red;
`
const LeftBox = styled.div`
    display: flex;
    height: 25rem;
    width: 50%;
`
const RightBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    /* position: absolute; */
    /* margin: 300px; */
`

const EpicuriousImg = styled.img`
    margin: 0 auto;
    /* padding: 2rem; */
    /* height: 500px; */
`

const BGImg = styled.img`
    /* position: absolute; */
    /* z-index: 1; */
    /* width: 100%; */
`
const Div1 = styled.div`
    display: flex;
    flex-direction: row;
`
const TreeImg = styled.img`
    padding: 3rem 0 0 2rem;
    width: 330px;
    text-align: right;
    /* float: right; */
    /* position: absolute; */

`

const H2 = styled.h2`
    font-size: 5rem;
    color: #FC5600;
    text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
    text-align: left;
    margin-top: -10px;
    margin-bottom: 0;
    /* padding: 0; */
`

const H4 = styled.h4`
    color: #FFE4E4;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
    font-size: 3rem;
    display: flex;
    align-items: flex-end;
    margin: 0;
    padding: 0;
`
const TitleP = styled.p`
    font-size: 2.2rem;
    text-align: left;
    margin-top: -2px;
    padding: 0 10px;
    font-family: 'Karantina', cursive;
    color: gray;
    letter-spacing: 5.5px;
`

