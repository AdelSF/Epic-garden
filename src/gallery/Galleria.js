import React, { useState } from 'react';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import styled from 'styled-components';
import ButterflyOne from '../assests/design-imgs/bf-4-minified-min.jpg'
import ButterflyTwo from '../assests/design-imgs/bf-5-minified-min.jpg'



export default function Galleria() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
        <Div>
            <Img src={ButterflyOne} alt="garden gallery text"/>
            <H2>Garden Gallery</H2>
            <Img src={ButterflyTwo} alt="garden gallery text"/>
        </Div>
        {/* <UploadForm /> */}
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
    </>
  );
}


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