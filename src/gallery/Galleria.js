import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
import styled from 'styled-components';
import ButterflyOne from '../assests/design-imgs/bf-4-minified-min.jpg'
import ButterflyTwo from '../assests/design-imgs/bf-5-minified-min.jpg'
import UploadForm from './UploadForm';
import { motion, useScroll } from "framer-motion";
import '../App.css';




export default function Galleria() {
  const { scrollYProgress } = useScroll();
  const [seeMore, setSeeMore] = useState('unset')
  const [seeMoreContent, setSeeMoreContent] = useState("See All Images")

  function displayImg() {
    if (seeMore === '150vh') {
        setSeeMore('unset')
        setSeeMoreContent("See All Images")
      } else {
        setSeeMoreContent("See Less")
        setSeeMore('150vh')
    }
}

  return (
    <>
    <Container>
    <GalleryBox displayStatus={seeMore}>
        {/* <UploadForm /> */}
        <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
        />

        <Div>
            <Img src={ButterflyOne} alt="garden gallery text"/>
            <H2>Garden Gallery</H2>
            <Img src={ButterflyTwo} alt="garden gallery text"/>
        </Div>
        <ImageGrid />
    </GalleryBox>
    </Container>
      <Btn onClick={displayImg}>{seeMoreContent}</Btn>
    </>
  );
}

const Container = styled.div`
`


const GalleryBox = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: ${({displayStatus}) => displayStatus === '150vh' ? 'unset' : '150vh' };
    overflow: hidden;
`
const Div = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    width: 150px;
    @media only screen and (max-width: 600px) {
        width: 100px;
        height: 70px;
  }
`

const H2 = styled.h1`
    font-size: 3rem;
    color: white;
    text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
    @media only screen and (max-width: 1000px) {
        font-size: 2rem;
  }

`

const Btn = styled.button`
    border: 1px solid black;
    padding: 10px;
    border-radius: 5px;
    /* margin: 1rem; */
    width: 200px;
    font-weight: 600;
    font-size: 1.1rem;
    margin-top: -30px;
    cursor: pointer;
    /* padding: -20px; */
    &:hover {
      /* text-shadow: 0px 0px 5px black; */
      color: white;
      scale: 1.1;
      transition: .5s;
      background-color: gray;
  }
`