import React, { useEffect, useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import styled from 'styled-components';
import Imgix from "react-imgix";


const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  // const [seeMore, setSeeMore] = useState([]);
  // console.log("docs", docs)

  // useEffect(() => {
  //   if (!seeMore) {
  //     let temp = [];
  //     for(let i = 0; i < 8; i++) {
  //       temp.push(docs[i]);
  //     }
  //     setSeeMore(temp);
  //   }
  // })


  return (
    <GridBox className="img-grid">
      {docs && docs.map(doc => (
          <div onClick={() => setSelectedImg(doc.url)}>
            <H2>{doc.name.split('-')[0]}</H2>
            <Imgix
              key={doc.id}
              sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
              src={doc.url}
              imgixParams={{
                fit: "crop",
                fm: "jpg",
              }}
              width={600}
              height={600}
            />      
        </div>
      ))}
      <button>See More</button>
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

const H2 = styled.h2`
  margin: 0 auto;
  position: absolute;
  text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
  color: lightgray;
  opacity: .7;
`
