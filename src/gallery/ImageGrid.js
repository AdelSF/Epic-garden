import React from 'react';
import useFirestore from '../hooks/useFirestore';
import styled from 'styled-components';
import Imgix from "react-imgix";


const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <GridBox className="img-grid">
      {docs && docs.map(doc => (
          // <div onClick={() => setSelectedImg(doc.url)} key={doc.id}>
          <div>
            <H2>{doc.name.split('-')[0]}</H2>
            <Imgix
              key={doc.id}
              sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
              src={doc.url}
              imgixParams={{
                fit: "crop",
                fm: "jpg",
              }}
              width={450}
              height={450}
              />      
        </div>
      ))}
    </GridBox>
  )
}

export default ImageGrid;

const GridBox = styled.div`
  background-color: black;
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  border-top: 6px solid lightgray;
  border-bottom: 6px solid lightgray;
`

const H2 = styled.h2`
/* padding-top: 10px; */
  text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
  color: lightgray;
  opacity: .7;
`
