import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Modal = ({ setSelectedImg, selectedImg }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  return (
    <BackDrop>

        <motion.div className="backdrop" onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            >
            <motion.img src={selectedImg} className="backdrop-img" alt="enlarged pic" 
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                />
        </motion.div>
    </BackDrop>
  )
}

export default Modal;


const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);

    /* &.backdrop-img{
        display: block;
        max-width: 60%;
        max-height: 80%;
        margin: 60px auto;
        box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
        border: 3px solid white;
    } */
`
