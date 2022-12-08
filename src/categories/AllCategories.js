import React from 'react';
import styled from 'styled-components';
import Category from './Category'
import foodSeller from './../assests/data/restaurantsData.json';


export default function AllCategories() {
    
    return(
        <Container>
            <Title>
                <TopTitle>TENANTS</TopTitle>
                <Services>Take Out - Dine In - Tea - Gifts</Services>
                <AboutEpic>Epicurious Garden shares the same vision as the famous Greek philosopher Epicurious:<br /> to pursue pleasure and happiness around food and gardens. 
                </AboutEpic>
            </Title>
                {foodSeller.map((data) => {
                    return(
                        <Category 
                            foodSellerData={data}
                        />
                    )
                })}
        </Container>
    )
}



const Container = styled.div`
    background-color: #FFE4E4;
    margin-bottom: 5rem;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    border-top: 2px solid gray;
    background-color: #ffffff;
`

const P = styled.p`
    color: red;
`
const Title = styled.div`
    display: block;
    width: 80%;
`

const TopTitle = styled.h2`
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
    color: #ffffff;
    font-size: 3rem;
    margin: 3rem 0 0 0;
    padding: 0;
`
const Services = styled.h4`
    font-family: 'Karantina', cursive;
    color: #707070;
    letter-spacing: 5.5px;
    font-size: 2rem;
    margin: 1rem;
`
const AboutEpic = styled.p`
    font-weight: 500;
    margin: 0 5rem 3rem 5rem;
    font-size: 1.3rem;
    color: #707070;
`

const CategoryBox = styled.div`
    /* margin: 0; */
`
