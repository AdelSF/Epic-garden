import React, {useState} from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Modal = ({ setSelectedImg, selectedImg }) => {

  console.log("w", window.innerWidth)

  const handleClick = (e) => {
    if (window.innerWidth > 1200){

      if (e.target.classList.contains('backdrop')) {
        setSelectedImg(null);
      }
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
`
