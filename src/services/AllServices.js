import React, { useState } from 'react';
import styled from 'styled-components';
import Service from './Service';

export default function AllServices() {


    return(
        <Container>
            <Service />
            <Service />
            <Service />
            <Service />
        </Container>
    )
}



const Container = styled.div`
    border: 1px solid black;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`
