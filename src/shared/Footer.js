import React from 'react';
import styled from 'styled-components';
import PeopleInGarden from './../assests/design-imgs/people-in-garden-minified-min.jpg'


export default function Footer() {


    return(
        <Container>
            <LeftBox>
                <H4>VISIT US</H4>
                <TitleP>Your one-stop shop for take out or hanging out</TitleP>
                <p>1511 Shattuck Ave, Berkeley, CA 94709</p>
                <Button><ALink href="https://www.google.com/maps/place/Epicurious+Garden/@37.8798335,-122.2710551,17z/data=!3m1!4b1!4m5!3m4!1s0x80857ea13165eee9:0x87b0a87eae7ce71e!8m2!3d37.8798116!4d-122.2690607" target="_blank">Get Directions</ALink></Button>           
                <p>Questions & Feedback</p>
                <Button><ALink href="mailto:info@epicuriousgarden.com" >Email Us</ALink></Button>           

            </LeftBox>
            <RightBox>
                <FooterImg src={PeopleInGarden} alt="people in garden"/>
            </RightBox>
        </Container>
    )
}



const Container = styled.div`
    background-color: #fed2a5;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media only screen and (max-width: 1000px) {
        flex-wrap: wrap;
        font-size: 1.4rem;
        margin: .6rem 1rem;
  }
`

const FooterImg = styled.img`
    width: 100%;
`

const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
`
const RightBox = styled.div`
    width: 50%;
    padding: 3rem 0;
    @media only screen and (max-width: 1000px) {
        width: 100%;
  }
`

const H4 = styled.h4`
    color: #FC5600;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
    font-size: 2rem;
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    margin-top: 2rem;
`
const TitleP = styled.p`
    font-size: 1rem;
    color: gray;
    margin-bottom: 3rem;
    letter-spacing: 4px;
    @media only screen and (max-width: 800px) {
        letter-spacing: 2px;
  }
`

const Button = styled.button`
    border: 1px solid white;
    padding: 10px;
    border-radius: 5px;
    width: 200px;
    margin: 0 auto;
    margin-bottom: 2rem;
`

const ALink = styled.a`
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
`
