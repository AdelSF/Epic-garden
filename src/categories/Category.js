import React, { useState } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components'
import Arrow from '../assests/design-imgs/arrow-down.png';
import Card from './Slider.tsx';



export default function Category({ foodSellerData }) {
    const {name, type, foods, address, delivery, number, partyPlatter, veganOptions, vegetableOption, webside, workDays, workHours, photos} = foodSellerData;
    const [open, setOpen] = useState('none')

    return (
        <Container>
            <Accordion onClick={() => setOpen(!open)}>
                <Restaurant>
                    <RestaurantName>{name}</RestaurantName>
                    <RestaurantType>{type}</RestaurantType>
                </Restaurant>
                <AccordionArrow open={open}  src={Arrow} alt='Accordion Arrow' />
            </Accordion>
            <MoreDetails open={open}>
                <MainInfoBox>
                    <InfoBox>
                        <ItemsHeader>Most Popular</ItemsHeader>
                        <Items>
                            <Item>{foods[0]}</Item>
                            <Item>{foods[1]}</Item>
                            <Item>{foods[2]}</Item>
                            <Item>{foods[3]}</Item>
                            <Item>{foods[4]}</Item>
                        </Items>
                    </InfoBox>
                    <InfoBox>
                        <ItemsHeader>Contact Info</ItemsHeader>
                        <Items>
                            <Item>Phone:{number}</Item>
                            <Item>{address}</Item>
                            <Item>Business days: {workDays}</Item>
                            <Item>Business hours: {workHours}</Item>
                            <Item>Delivery: {delivery}</Item>
                        </Items>
                    </InfoBox>
                    <InfoBox>
                        <ItemsHeader>More Info</ItemsHeader>
                        <Items>
                            <Item>Party platter: {partyPlatter}</Item>
                            <Item><a href={webside} target="_blank">Visit The Website</a></Item>
                            <Item>Vegetarian Food: {vegetableOption}</Item>
                            <Item>Vegan Food: {veganOptions}</Item>
                        </Items>
                    </InfoBox>
                </MainInfoBox>
                <ImgBox>
                    <Card url={foodSellerData.photos[0]}/>
                    <Card url={foodSellerData.photos[1]}/>
                    <Card url={foodSellerData.photos[2]}/>
                </ImgBox>
            </MoreDetails>
        </Container>
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

const Accordion = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    border: 1px solid gray;
    border-radius: 2rem;
    font-size: 2rem;
    background: white;
    box-shadow: 2px 2px 8px gray;
    cursor: pointer;
`

const Restaurant = styled.div`
    display: flex;
    align-items: center;
`
const RestaurantName = styled.p`
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: #707070;
    @media only screen and (max-width: 600px) {
        font-size: 1.1rem;
    }
    @media only screen and (max-width: 400px) {
        margin-left: .8rem;
        margin-right: .8rem;
        font-size: 1rem;
    }
  
`
const RestaurantType = styled.p`
    font-size: 1rem;
    color: #707070;
    @media only screen and (max-width: 400px) {
        font-size: .7rem;
    }
`
const AccordionArrow = styled.img`
    transform: ${({open})  => open ? 'rotate(0)' : 'rotate(180deg)'};
    border: 2px solid #FC5600;
    padding: 8px;
    border-radius: 50%;
    margin: 5px;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
    transition: transform .4s ease-in-out;
`
const accordion = keyframes`
    0% {
      /* max-height: 0; */
      /* opacity: 0; */
      /* transform: translate3d(0, 0, 0); */
      /* visibility: visible; */
      display: none;
    }
    100% {
      /* max-height: 100%; */
      /* opacity: 1; */
      /* transform: translate3d(0, -100%, 0); */
      /* visibility: hidden; */
      display: flex;
    }
`
const MoreDetails = styled.div`
    /* visibility: ${({open})  => open ? 'hidden' : 'visible'}; */
    /* max-height: ${({open})  => open ? '0px'  : '100%'}; */
    /* opacity: ${(props) => (props.open ? "0" : "1")}; */
    /* padding: ${(props) => (props.open ? "0 15px" : "15px")}; */
    /* ${({open})  => open && 'transition: max-height 2s ease-out;'} */
    /* opacity: ${({open})  => open ? '0'  : '1'}; */
    display: ${({open})  => open ? 'none'  : 'flex'};
    /* display: flex; */
    justify-content: space-between;
    flex-wrap: wrap;
    width: 95%;
    background: #ffffff;
    border: 2px solid #FC5600;
    border-top: none;
    text-align: left;
    overflow: hidden;
    border-radius: .5rem;
    transition: all 1s ease-in-out;
    animation-name: ${accordion};
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
`



const ImgBox = styled.div`
    max-width: 400px;
    padding-bottom: 100px;
    @media only screen and (max-width: 900px) {
      margin: 0 auto;
  }
`

const InfoBox = styled.div`
`

const Items = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
`

const Item = styled.li`
    margin: 10px;
    float: left;
    text-align: left;
    font-weight: 500;
    @media only screen and (max-width: 800px) {
        line-height: 5px;
    }
`


const ItemsHeader = styled.h3`
    margin: 1rem 2rem;
    padding: 0 1rem;
    line-height: 5px;
`