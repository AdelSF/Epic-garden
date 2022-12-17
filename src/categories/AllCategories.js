import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import foodSeller from './../assests/data/restaurantsData.json';


export default function AllCategories() {
    
    return(
        <Container>
            <Title>
                <TopTitle>TENANTS</TopTitle>
                <Services>Take Out - Dine In - Tea - Gifts</Services>
                <AboutEpic>Epicurious Garden shares the same vision as the famous Greek philosopher Epicurious:<br /> <Span>to pursue pleasure and happiness around food and gardens.</Span> 
                </AboutEpic>
            </Title>
            <Content>

                {foodSeller.map((data) => {
                    return(
                        <>
                        <Category 
                            foodSellerData={data} key={data.name}
                            />
                        
                        </>
                    )
                })}
            </Content>
        </Container>
    )
}



const Container = styled.div`
    /* width: 100%; */
    background-color: #FFE4E4;
    margin-bottom: 7rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: center;
    border-top: 2px solid gray;
    background-color: #ffffff;
`

const Title = styled.div`
    /* display: block; */
    width: 900px;
    margin: 0 auto;
    @media only screen and (max-width: 900px) {
        width: 97%;
        justify-content: center;
        margin: 0;
  }
  `
const Content = styled.div`
    width: 900px;
    margin: 0 auto;
    @media only screen and (max-width: 900px) {
        width: 97%;
        justify-content: center;
        margin: 0;
    }
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
@media only screen and (max-width: 700px) {
    letter-spacing: 3.5px;
    font-size: 1.4rem;
} 
@media only screen and (max-width: 400px) {
      letter-spacing: 2.5px;
  }
`
const AboutEpic = styled.p`
    margin: 0 5rem 3rem 5rem;
    font-size: 1.2rem;
    color: #707070;
    @media only screen and (max-width: 700px) {
        font-size: 1rem;
        margin: 1rem;
    }
    `

const Span = styled.span`
    padding-top: 4rem;
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 3px;
`
