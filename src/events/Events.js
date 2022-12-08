import React from "react";
import styled from "styled-components";





export default function Events() {




    return(
        <EventBox>
            <H2><span>UPCOMING EVENT: </span> 
            For example eating event on 1/2/2023 with 20% off for everyone on everything</H2>
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