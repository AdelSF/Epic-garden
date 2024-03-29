import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from '../../assests/design-imgs/arrow-down.png';
import Card from './Slider.tsx';

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';



export default function Category({ foodSellerData }) {
    const { name, type, foods, address, delivery, number, partyPlatter, veganOptions, vegetableOption, webside, workDays, workHours } = foodSellerData;
    const [open, setOpen] = useState('none')

    return (
        <Accordion onClick={() => setOpen(!open)}>
            <AccordionSummary>
                <Restaurant>
                    <RestaurantName>{name}</RestaurantName>
                    <RestaurantType>{type}</RestaurantType>
                </Restaurant>
                <AccordionArrow open={open}  src={Arrow} alt='Accordion Arrow' />
            </AccordionSummary>
            <MoreDetails open={open}>
                <MainInfoBox>
                    <InfoBox>
                        <ItemsHeader>Most Popular</ItemsHeader>
                        <Items>
                            {foods.map((food, index) => <Item key={index}>{food}</Item>)}
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
                            <Item><a href={webside} target="_blank" rel="noopener">Website</a></Item>
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
        </Accordion>
    )
}

const Accordion = styled(MuiAccordion)`
    margin-bottom: 1.2rem;
    /* @media only screen and (max-width: 500px) {
        .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root {
            padding: 0;
        }
    } */
`
const AccordionSummary = styled(MuiAccordionSummary)`
    height: 60px;
    min-height: 60px;
    box-shadow: 2px 2px 8px gray;
    @media only screen and (max-width: 500px) {
        padding: 0 !important;
    }
    > div {
        background-color: red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;
        min-height: 60px;
        font-size: 2rem;
        background: white;
        cursor: pointer;
    }
`

const MainInfoBox = styled.div`
    display: flex;
    flex-direction: column;
`

const MoreDetails = styled(MuiAccordionDetails)`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
    background: #ffffff;
    border: 2px solid #FC5600;
    border-top: none;
    text-align: left;
    border-radius: 1rem;
    margin-bottom: 1rem;
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
    margin: .7rem;
    float: left;
    text-align: left;
    font-weight: 500;
    @media only screen and (max-width: 500px) {
        margin: .2rem 0;
        font-weight: 400;
    }
`


const ItemsHeader = styled.h3`
    margin: 1rem 2rem;
    padding: 0 1rem;
    line-height: 5px;
`