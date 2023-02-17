import React from 'react';
import styled from 'styled-components';


export default function About() {


    return(
        <Container>
            <H2>Construction of our Garden in Berkeley</H2>
            <ImgBox>
                <iframe width="100%" height="600px" src="https://www.youtube.com/embed/-Jmlrz4l0ug" title="Building Epicurious Gardens" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </ImgBox>
            <ImgBox>
                <iframe width="100%" height="600px" frameBorder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowFullScreen src="https://kuula.co/share/N8v8G?logo=1&info=1&fs=1&vr=0&sd=1&autorotate=0.27&thumbs=1&alpha=0.60"></iframe> 
            </ImgBox>
        </Container>
    )
}



const Container = styled.div`
    margin: 2rem 0;
`
const ImgBox = styled.div`
    margin: 1rem 0;
    padding: .5rem 0;
    border-top: 5px solid gray;
    border-bottom: 5px solid gray;
`

const H2 = styled.h2`
    padding-top: 2rem;
    border-top: 5px solid gray;
    font-size: 2.5rem;
    font-family: 'Karantina';
    letter-spacing: 10px;
    color: gray;
`

