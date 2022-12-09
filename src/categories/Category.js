import React, { useState } from 'react';
import styled from 'styled-components';
import QrCode from '../assests/design-imgs/qrcode.jpg'
import FoodExample from '../assests/design-imgs/flat-lay-batch-cooking-composition.jpg'
import Arrow from '../assests/design-imgs/arrow-down.png'



export default function Category({ foodSellerData }) {
    const {name, type, foods, address, delivery, number, partyPlatter, veganOptions, vegetableOption, webside, workDays, workHours, photos} = foodSellerData
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
                        {/* <InfoBox> */}
                            {/* <H4>See the Full Menu</H4> */}
                            {/* <ImgBox360>
                                <iframe width="100%" height="640" frameBorder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowFullScreen scrolling="no" src="https://kuula.co/share/N8v8G?logo=1&info=1&fs=1&vr=0&sd=1&autorotate=0.27&thumbs=1&alpha=0.60"></iframe>            
                            </ImgBox360> */}
                            {/* <QRExample src={QrCode} alt='Epicurious' /> */}
                        {/* </InfoBox> */}
                    </MainInfoBox>
                    <ImgBox>
                        <ImgExample src={photos[0]} alt='food' />
                        <ImgExample src={photos[1]} alt='food' />
                        <ImgExample src={photos[2]} alt='food' />
                        <ImgExample src={photos[2]} alt='food' />
                    </ImgBox>

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
    /* transition-delay: .5s; */
    box-shadow: 2px 2px 8px gray;
    @media only screen and (max-width: 400px) {
        width: 100%;
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
    flex-wrap: wrap;
    justify-content: space-around;
    background: #e6ffff;
    padding: 1rem;
    border-top: 1px solid lightgray;
`

const ImgExample = styled.img`
    width: 330px;
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

const SpanBtn = styled.span`
    float: left;
    margin: .5rem 2rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: #707070;
    @media only screen and (max-width: 600px) {
    font-size: 1.4rem;
    /* display: none; */
    margin: .6rem 1rem;
    }
    @media only screen and (max-width: 400px) {
    font-size: 1.2rem;
    margin: .7rem .2rem;
  }
`
const PBtn = styled.p`
    float: left;
    margin: 1rem .1rem;
    font-size: .5em;
    color: #707070;
    @media only screen and (max-width: 600px) {
    /* display: none; */
    /* margin: 0; */
    font-size: .4em;
    margin: 1rem 0;    
}
@media only screen and (max-width: 400px) {
    font-size: .4em;
    margin: 1rem 0;    
  }
`

const ArrowDown = styled.img`
    border: 2px solid #FC5600;
    padding: 8px;
    border-radius: 50%;
    float: right;
    margin: 5px;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
    @media only screen and (max-width: 400px) {
        margin-left: 5px;     
        margin-top: 5px;     
  }
`

const InfoBoxImg = styled.div`
 
`


const ImgBox360 = styled.div`
    /* width: 500px;
    height: 500px; */
    /* margin: 1rem 0;
    padding: .5rem 0;
    border-top: 5px solid gray;
    border-bottom: 5px solid gray; */
`