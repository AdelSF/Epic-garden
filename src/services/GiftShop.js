import React from 'react';
import styled from 'styled-components';
import MozhaiImg from './../assests/design-imgs/mozhai-img-minified-min.jpeg'


export default function GiftShop() {


    return(
        <Container>
            <Box>
                <H2>Souvenir Shop</H2>
                <ServiceDescription>The Mozhai Foundation promotes the understanding and appreciation of Chinese art and culture by providing programs that educate the public, advance scholarship, and foster cultural exchange. These programs include art exhibitions, lectures and seminars, research projects, and the publication of books related to Chinese art and culture.
                                    The Mozhai Foundation will also consider making grants for support of educational programs or other activities for the public benefit which are unrelated, or not strictly related, to Chinese art and culture, provided that such grants shall be made to other qualified nonprofit organizations.
                </ServiceDescription>
                <Button><ALink href='https://mozhaifoundation.org/' target="_blank">Get Direction</ALink></Button>           
           
            </Box>
            <Box>
                <ImgIcon src={MozhaiImg} alt="About Mozhai foundation"/>
                <ImgIcon src={MozhaiImg} alt="About Mozhai foundation"/>
                <ImgIcon src={MozhaiImg} alt="About Mozhai foundation"/>
                <ImgIcon src={MozhaiImg} alt="About Mozhai foundation"/>
            </Box>
        </Container>
    )
}



const Container = styled.div`
    border: 2px solid gray;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    margin: 5rem 1rem;
    flex-wrap: wrap;
    @media only screen and (max-width: 1000px) {
        flex-wrap: wrap;
  }
`

const Box = styled.div`
    /* margin: .5rem; */
    border-radius: .5rem;
    background-color: #ffffff;
    margin: 1rem auto;
    /* flex-direction: row; */
    @media only screen and (max-width: 1000px) {
        margin: 0 auto;
  }
`

const H2 = styled.h2`
    margin: 2rem;
`
const ImgIcon = styled.img`
    border-radius: .5rem;
    width: 300px;
    border-bottom: 2px solid lightgray;
    margin: 2rem;
    @media only screen and (max-width: 1000px) {
        padding-top: 1rem;
        margin: 0 auto;
  }
`
const ServiceDescription = styled.p`
    padding: 0 5rem;
    text-align: justify;
    text-justify: inter-word;
    /* padding: 10px; */
`

const Button = styled.button`
    border: 1px solid gray;
    padding: 10px;
    border-radius: 5px;
`
const ALink = styled.a`
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
`

