import React, { useState } from 'react';
import styled from 'styled-components';


export default function Service() {


    return(
        <Container>
            <p>Food delivery from 7 restaurant</p>
            {/* <p>cooking school</p>
            <p>culture and none profit</p>
            <p>dine in and hang out</p> */}
        </Container>
    )
}



const Container = styled.div`
    border: 1px solid black;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 5rem 2rem;
`
