import React, { useState } from 'react';
import styled from 'styled-components';
import CookingIcon from './../assests/design-imgs/cooking-school-icon.jpg';
import FoodTakeOutIcon from './../assests/design-imgs/take-out-icon-minified-min.jpg';
import CultureIcon from './../assests/design-imgs/culture-icon-minified-min.jpg';
import DineInIcon from './../assests/design-imgs/dine-in-icon-minified-min.jpg';
import TreeGroup1 from './../assests/design-imgs/tree-Group1.png';
import TreeGroup2 from './../assests/design-imgs/tree-Group-2.png';

export default function Service() {


    return(
        <>
        <Container>
           

            <Box>
                <ImgIcon src={DineInIcon} alt="dine in icon"/>
                <H3>DINE IN & HANG OUT</H3>
                <H4>In Our Beautiful Garden</H4>
                <ServiceDescription>Not only is gathering together enjoyable, but it also nurtures our most important relationships and promotes a sense of belonging and community. A simple meal shared with friends or family can leave you feeling incredibly inspired, rejuvenated and connected.</ServiceDescription>
            </Box>
            <Box>
                <ImgIcon src={CookingIcon} alt="cooking icon"/>
                <H3>COOKING SCHOOL</H3>
                <H4>Kitchen On Fire</H4>
                <ServiceDescription>Founded in 2005, Kitchen on Fire delivers award-winning cooking experiences taught by professional chef instructors and nutrition consultants. Our students learn how to integrate delicious and nutritious food into their lives. Join us and discover the skills to cook real food the right way today!</ServiceDescription>
            </Box>
            <Box>
                <ImgIcon src={FoodTakeOutIcon} alt="take out icon"/>
                <H3>TAKE OUT</H3>
                <H4>Many Delicious Choices</H4>
                <ServiceDescription>When you have a busy household, finding time to make a home-cooked meals every night can be exhausting. When you need a break from the routine, ordering takeout from a restaurant is an excellent, delicious option that can benefit your family. Here are we have many different choces, pick up your phone and explore the garden's take out oprtions.</ServiceDescription>
            </Box>
            <Box>
                <ImgIcon src={CultureIcon} alt="Art and culture icon"/>
                <H3>CULTURE & ART</H3>
                <H4>The Mozhai Foundation</H4>
                <ServiceDescription>Studies have shown that expression through art can help people with depression, anxiety, and stress. Art has also been linked to improved memory, reasoning, and resilience in aging adults. We're diving into the powerful impact art can have on your life.</ServiceDescription>
            </Box>
         

        </Container>
        {/* <Cont>
            <BoxImg>
            <BGImg src={TreeGroup1} alt="Art and culture icon"/>
            </BoxImg>
            <BoxImg>
                <BGImg src={TreeGroup2} alt="Art and culture icon"/>
            </BoxImg>
        </Cont> */}
        </>


    )
}



const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 5rem 1rem;
`
const Cont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* margin: 5rem 1rem; */
    /* background-image: url(${TreeGroup1});
    background-repeat: no-repeat;
    background-size: auto; */
`

const Box = styled.div`
    border: 2px solid gray;
    margin: .5rem;
    border-radius: .5rem;
    background-color: #ffffff;
`

const H3 = styled.h3`
    margin-top: 2rem;
    font-size: 1.2rem;
`
const H4 = styled.h4`
    /* margin: 2rem; */
    /* font-size: 1.2rem;  */
    color: lightgray;
    margin-top: -1rem;
`
const ImgIcon = styled.img`
    border-radius: .5rem;
    width: 300px;
    border-bottom: 2px solid lightgray;
`
const BGImg = styled.img`
    /* position: inline; */
    z-index: 1;
    margin-right: 5rem;
    position: absolute;
    /* left: 0; */
    /* bottom: 0; */
`
const ServiceDescription = styled.p`
    width: 280px;
    text-align: justify;
    /* text-justify: inter-word; */
    padding: 10px;
    font-size: 1.1rem;
    font-weight: 500;
    color: #52527a;
`

const BoxImg = styled.div`

`