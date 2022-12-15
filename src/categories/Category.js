import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from '../assests/design-imgs/arrow-down.png';



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
                            <ImgBox>
                                <ImgArrow><ArrowRight></ArrowRight></ImgArrow>
                                <ImgExample src={photos[0].image} alt='food' />
                                <ImgExample src={photos[1].image} alt='food' />
                                <ImgExample src={photos[2].image} alt='food' />
                                <ImgExample src={photos[2].image} alt='food' />
                                <ImgExample src={photos[2].image} alt='food' />
                                <ImgExample src={photos[2].image} alt='food' />
                            </ImgBox>
                        </InfoBox>
                    </MainInfoBox>
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

const Btn = styled.button`
    width: 90%;
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
    overflow: scroll;
    width: 350px;
    padding: 1rem;
    background: #e6ffff;
    border: 1px solid gray;
    border-radius: 1rem;
`

const ImgExample = styled.img`
    width: 250px;
    border: 2px solid gray;
    margin: 0 1rem;
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

`

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const Li = styled.li`
    margin: 10px;
    float: left;
    text-align: left;
    font-weight: 500;
`



const H2 = styled.h2`
    display: block;
    position: relative;
`

const H4 = styled.h3`
    margin: 1rem 2rem;
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

const ImgArrow = styled.p`
    display: flex;
    align-items: center;
`

const ArrowRight = styled.i`
    border: solid black;
    border-width: 0 5px 5px 0;
    /* display: inline-block; */
    padding: 6px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
`
