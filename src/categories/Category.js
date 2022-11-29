import React, { useState } from 'react';
import styled from 'styled-components';
import QrCode from '../assests/qrcode.jpg'
import FoodExample from '../assests/flat-lay-batch-cooking-composition.jpg'
import Arrow from '../assests/arrow-down.png'
// import restData from './../assests/data/restaurantsData.json';

export default function Category({ foodSellerData }) {
    const {name, type, foods, address, delivery, number, partyPlatter, veganOptions, vegetableOption, webside, workDays, workHours} = foodSellerData
    const [open, setOpen] = useState('none')

    function toggler() {
        setOpen(!open);
    }


    return (
        <>
    
            <Container>
                <Btn onClick={toggler}><SpanBtn>{name} |</SpanBtn>
                    <PBtn>{type}</PBtn>
                    <ArrowDown src={Arrow} alt='arrow down' />
                </Btn>
                <MoreDetails style={{ display: open ? 'none' : 'block'}}>
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
                        <InfoBox>
                            <H4>See the Full Menu</H4>
                            <QRExample src={QrCode} alt='Epicurious' />
                        </InfoBox>
                    </MainInfoBox>
                    <ImgBox>
                        <ImgExample src={FoodExample} alt='Epicurious' />
                        <ImgExample src={FoodExample} alt='Epicurious' />
                        <ImgExample src={FoodExample} alt='Epicurious' />
                        <ImgExample src={FoodExample} alt='Epicurious' />
                    </ImgBox>

                </MoreDetails>
            </Container>

        </>
    )
            
    

}



const Container = styled.div`
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

const ImgBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    background: #e6ffff;
    padding: 1rem;
    border-top: 1px solid lightgray;
`

const ImgExample = styled.img`
    width: 250px;
    border: 2px solid gray;
    border-radius: 1rem;
`
const QRExample = styled.img`
    width: 150px;
`

const MainInfoBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

const InfoBox = styled.div`
    /* border-right: 1px solid lightgray; */
    /* width: 300px; */
`

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    /* width: 200px; */
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
    float: left;
    text-align: left;
    /* justify-content: flex-start; */

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
    color: #707070;
`
const PBtn = styled.p`
    float: left;
    margin: 1rem .1rem;
    font-size: .5em;
    color: #707070;
    /* display: flex;
    align-items: center; */
`

const ArrowDown = styled.img`
    border: 2px solid #FC5600;
    padding: 8px;
    border-radius: 50%;
    float: right;
    margin: 5px;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
`

