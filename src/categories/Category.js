import React, { useState } from 'react';
import styled from 'styled-components';
import Epic from '../assests/PHOTO-2022-11-11-02-12-52.jpg'


export default function Category() {

    const [open, setOpen] = useState('none')

    function toggler() {
        setOpen(!open);
    }

    return(
        <Container>
            <Btn onClick={toggler}><SpanBtn>Sunnyside Cafe |</SpanBtn><PBtn>American Breakfast</PBtn></Btn>
                <MoreDetails style={{ display: open ? 'none' : 'block'}}>

                    <MainInfoBox>
                        <InfoBox>
                            <H4>Menu</H4>
                            <Ul>
                                <Li>Egg in any style</Li>
                                <Li>House made bread</Li>
                                <Li>Cassadiladddddd</Li>
                                <Li>Burrito0000</Li>
                                <Li>Queso para dos</Li>
                                <Li>El farolito</Li>
                            </Ul>
                        </InfoBox>

                        <InfoBox>
                            <H4>More Info</H4>
                            <Ul>
                                <Li>party platter open</Li>
                                <Li>business hours</Li>
                                <Li>business days</Li>
                                <Li>Call now</Li>
                                <Li>link to website</Li>
                                <Li>address</Li>
                            </Ul>
                        </InfoBox>
                    </MainInfoBox>
                    <ImgBox>
                        <EpicuriousImg src={Epic} alt='Epicurious' />
                        <EpicuriousImg src={Epic} alt='Epicurious' />
                        <EpicuriousImg src={Epic} alt='Epicurious' />
                        <EpicuriousImg src={Epic} alt='Epicurious' />
                    </ImgBox>

                </MoreDetails>
        </Container>
    )
}



const Container = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: .5rem;
`

const Btn = styled.button`
    width: 90%;
    border: 1px solid gray;
    border-radius: 2rem;
    font-size: 2rem;
    background: white;
    /* transition-delay: .5s; */
    box-shadow: 2px 2px 8px gray;

`
const MoreDetails = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 88%;
    background: #ffffff;
    border: 2px solid #FC5600;
    border-top: none;
`

const EpicuriousImg = styled.img`
    width: 250px;
`

const MainInfoBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const InfoBox = styled.div`
    border: 1px solid gray;
    width: 300px;
`

const Ul = styled.ul`
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between; */
    width: 200px;
    /* display: ; */
    /* border: 1px solid black; */
`

const Li = styled.li`
    /* flex:1 1 1 160px; */
    /* flex: 1 1 auto; */
    margin: 10px;
    /* padding: 20px; */
    /* list-style-type: none; */
    /* display: block; */
    /* float: left; */
`

const ImgBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`

const H2 = styled.h2`
    display: block;
    position: relative;
    /* left: 0; */
`

const H4 = styled.h3`
    /* display: flex;
    justify-content: left; */
    margin: 1rem 2rem;
`

const SpanBtn = styled.span`
    float: left;
    margin: .5rem 2rem;
    font-size: 1.8rem;
    font-weight: 700;
`
const PBtn = styled.p`
    float: left;
    margin: 1rem .1rem;
    font-size: .5em;
    /* display: flex;
    align-items: center; */
`

