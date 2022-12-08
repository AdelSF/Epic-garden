import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export default function ProgressBar ({ file, setFile }){
  const { progress, url } = useStorage(file);
    useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <Div>
        <motion.div 
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        >file</motion.div>
    </Div>
  );
} 


const Div = styled.div`
    height: 5px;
    background: pink;
    margin: 3rem;
`