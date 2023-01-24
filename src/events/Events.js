import React from "react";
import styled from "styled-components";





export default function Events() {

    return(
        <EventBox>
            <H2><span>Tibet Souvenirs</span> 
             : 50% off on everything until end of March 2023</H2>
        </EventBox>
    )
}


const EventBox = styled.div`
    background-color: #Fda067;
    margin: 0;
    padding: 0;
`

const H2 = styled.h2`
    padding: 1rem;
`