import React from 'react';
import styled from 'styled-components';


export default function Img360One() {

    return(
        <Container>
            <H2>COOKING SCHOOL</H2>
            <ImgBox>
                {/* <iframe width="100%" height="600" frameBorder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowFullScreen src="https://kuula.co/share/N8v8G?logo=1&info=1&fs=1&vr=0&sd=1&autorotate=0.27&thumbs=1&alpha=0.60"></iframe>  */}
                <iframe width="100%" height="640" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/N8vgm?logo=1&info=1&fs=1&vr=0&sd=1&autorotate=0.24&thumbs=1"></iframe>           
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
/* width: 200px;    */
    padding-top: 1rem;
    border-top: 5px solid gray;
    font-size: 1.8rem;
`
