import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Imgix from "react-imgix";


const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');



  return (
    <GridBox className="img-grid">
      {docs && docs.map(doc => (
          <div onClick={() => setSelectedImg(doc.url)}>
            <Imgix
              key={doc.id}
              sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
              src={doc.url}
              imgixParams={{
                fit: "crop",
                fm: "jpg"
              }}
              width={600}
              height={600}
            />      
        </div>
      ))}
    </GridBox>
  )
}

export default ImageGrid;

const GridBox = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  border-top: 6px solid lightgray;
  padding: 1rem 0;
  border-bottom: 6px solid lightgray;
`
