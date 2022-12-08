import React from "react";
import Imgix from "react-imgix";
import styled from 'styled-components';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

  
  export default function Gallery({ setSelectedImg }){

    const { docs } = useFirestore('images');
    console.log("docs", docs)


return (

  <Div>
        {docs && docs.map(doc => (
          // console.log(doc.url)
          <Imgix
            key={doc.id}
            sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
            src={doc.url}
            imgixParams={{
              fit: "crop",
              fm: "jpg"
            }}
          // onClick={() => setSelectedImg(doc.url)}
          width={600}
          height={600}
          />
        ))}
  </Div>
  
  )
}


const P = styled.p`
    display: block;
    position: absolute;
    margin: 2rem;
    padding: 0;

    &:hover {
          /* display: block;
          position: absolute;
          z-index: 20; */
          scale: 1.2;
    }

`
const Div = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

`


