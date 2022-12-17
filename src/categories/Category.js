import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from '../assests/design-imgs/arrow-down.png';
import Card from './Slider.tsx';



export default function Category({ foodSellerData }) {
    const {name, type, foods, address, delivery, number, partyPlatter, veganOptions, vegetableOption, webside, workDays, workHours, photos} = foodSellerData;
    const [open, setOpen] = useState('none')

    function toggler() {
        setOpen(!open);
    }


    return (
        <>
    
            <Container>
                <Btn onClick={toggler}><SpanBtn>{name}</SpanBtn>
                    <PBtn>{type}</PBtn>
                    <ArrowDown src={Arrow} alt='arrow down' />
                </Btn>
                <MoreDetails style={{ display: open ? 'none' : 'block'}}>
                    <Div>

                    
                    <MainInfoBox>
                        <InfoBox>
                            <H4>Most Popular</H4>
                            <Ul>
                                <Li>{foods[0]}</Li>
                                <Li>{foods[1]}</Li>
                                <Li>{foods[2]}</Li>
                                <Li>{foods[3]}</Li>
                                <Li>{foods[4]}</Li>
                            </Ul>
                        </InfoBox>
                        <InfoBox>
                            <H4>Contact Info</H4>
                            <Ul>
                                <Li>Phone:{number}</Li>
                                <Li>{address}</Li>
                                <Li>Business days: {workDays}</Li>
                                <Li>Business hours: {workHours}</Li>
                                <Li>Delivery: {delivery}</Li>
                            </Ul>
                        </InfoBox>
                        <InfoBox>
                            <H4>More Info</H4>
                            <Ul>
                                <Li>Party platter: {partyPlatter}</Li>
                                <Li><a href={webside} target="_blank">Visit The Website</a></Li>
                                <Li>Vegetarian Food: {vegetableOption}</Li>
                                <Li>Vegan Food: {veganOptions}</Li>
                            </Ul>
                        </InfoBox>
                    </MainInfoBox>
                    <ImgBox>
                        <Card url={foodSellerData.photos[0]}/>
                        <Card url={foodSellerData.photos[1]}/>
                        <Card url={foodSellerData.photos[2]}/>
                    </ImgBox>
                    </Div>
                </MoreDetails>
            </Container>

        </>
    )
            
    

}



const Container = styled.div`
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: .5rem;
`

const MainInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
 
`

const Btn = styled.button`
    width: 100%;
    border: 1px solid gray;
    border-radius: 2rem;
    font-size: 2rem;
    background: white;
    box-shadow: 2px 2px 8px gray;
    @media only screen and (max-width: 600px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
    }
`

const SpanBtn = styled.span`
    float: left;
    margin: .5rem 2rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: #707070;
    @media only screen and (max-width: 600px) {
        font-size: 1.1rem;
        margin: .6rem 1rem;
    }
    @media only screen and (max-width: 400px) {
        margin: .7rem .2rem;
    }
  
`
const PBtn = styled.p`
    float: left;
    font-size: .5em;
    color: #707070;
    @media only screen and (max-width: 600px) {
    display: block;
    font-size: .4em;
}
@media only screen and (max-width: 400px) {
    font-size: .4em;
  }
`

const MoreDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 95%;
    background: #ffffff;
    border: 2px solid #FC5600;
    border-top: none;
    text-align: left;
    @media only screen and (max-width: 600px) {
        /* width: 95%; */
    }
`

const ImgBox = styled.div`
    max-width: 400px;
    padding-bottom: 100px;
    @media only screen and (max-width: 900px) {
      margin: 0 auto;
  }
`

const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const InfoBox = styled.div`
      /* flex: 50%; or - flex: 0 50% - or - flex-basis: 50% - */

`

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
`

const Li = styled.li`
    margin: 10px;
    float: left;
    text-align: left;
    font-weight: 500;
`


const H4 = styled.h3`
    margin: 1rem 2rem;
    padding: 0 1rem;
`


const ArrowDown = styled.img`
    border: 2px solid #FC5600;
    padding: 8px;
    border-radius: 50%;
    float: right;
    margin: 5px;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
    transition: transform .7s ease-in-out;
    display: flex;
    align-self: end;
    align-items: center;
    &:hover {
        transform: rotate(180deg);
    }
    @media only screen and (max-width: 600px) {
        margin-left: 5px;     
        margin-top: 5px;
  }
`
