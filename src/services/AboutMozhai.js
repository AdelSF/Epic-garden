import React from 'react';
import styled from 'styled-components';
import MozhaiImg from './../assests/design-imgs/mozhai-img-minified-min.jpeg';
// import Card from '../categories/Slider.tsx';


export default function AboutMozhai() {


    return(
        <Container>
            <Box>
                <ImgIcon src={MozhaiImg} alt="About Mozhai foundation"/>
            </Box>
            <Box>
                <H2>The Mozhai Foundation</H2>
                <ServiceDescription>The Mozhai Foundation is a philanthropic, not-for-profit institution dedicated to broadening public appreciation of traditional Chinese art and to supporting an international dialogue on culture in which the role of Chinese art and philosophy is an integral concern. In addition to the Modern Ink series of monographs, the Foundation sponsors academic research and publishing, and provides both financial and curatorial support for museum exhibitions and educational programming. Based in Berkeley, California, the Foundation was established in 2013 by the family of Jung Ying Tsao (1929-2011), a scholar, collector, and connoisseur of Chinese art, to carry on his legacy of scholarship, connoisseurship, and intercultural understanding.</ServiceDescription>
                <ServiceDescription>The Mozhai Foundation promotes the understanding and appreciation of Chinese art and culture by providing programs that educate the public, advance scholarship, and foster cultural exchange. These programs include art exhibitions, lectures and seminars, research projects, and the publication of books related to Chinese art and culture.
                                    The Mozhai Foundation will also consider making grants for support of educational programs or other activities for the public benefit which are unrelated, or not strictly related, to Chinese art and culture, provided that such grants shall be made to other qualified nonprofit organizations.
                </ServiceDescription>
                <Button><ALink href='https://mozhaifoundation.org/' target="_blank">Visit The Website</ALink></Button>           
            </Box>
        </Container>
    )
}



const Container = styled.div`
    border: 2px solid gray;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    margin: 2rem 1rem;
    flex-wrap: nowrap;
    @media only screen and (max-width: 1000px) {
        flex-wrap: wrap;
  }
`

const Box = styled.div`
    margin: .5rem;
    border-radius: .5rem;
    background-color: #ffffff;
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
    @media only screen and (max-width: 1000px) {
        padding-top: 1rem;
        margin: 0 auto;
  }
`
const ServiceDescription = styled.p`
    text-align: justify;
    text-justify: inter-word;
    padding: 10px;
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

