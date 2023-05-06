import React from 'react';
import useFirestore from '../hooks/useFirestore';
import styled from 'styled-components';
import Imgix from "react-imgix";


// const images = [
//   'Darband-7.JPG',
//   'Darband-8.JPG',
//   'Darband-9.JPG',
//   'Darband-17.jpg',
//   'Garden-23.jpg',
//   'Garden-37.jpg',
//   'Garden-38.jpg',
//   'Garden-0.jpg',
//   'Kirala-3.jpg',
//   'Kirala-9.jpg',
//   'Kirala-10.JPG',
//   'Kirala-11.JPG',
//   'Kirala-12.JPG',
//   'Kirala-13.JPG',
//   'Kirala-14.jpg',
//   'Kirala-16.jpg',
//   'Kirala-21.JPG',
//   'Kirala-29.jpg',
//   'Kirala-30.jpg',
//   'Kirala-36.jpg',
//   'Mexicana-1.jpg',
//   'Mexicana-4.jpg',
//   'Mexicana-6.JPG',
//   'Mexicana-7.JPG',
//   'Mexicana-10.JPG',
//   'Mexicana-11.JPG',
//   'SunnySide-3.JPG',
//   'SunnySide-4.JPG',
//   'SunnySide-5.JPG',
//   'SunnySide-6.JPG',
//   'SunnySide-7.JPG',
//   'SunnySide-8.JPG',
//   'SunnySide-9.JPG',
//   'SunnySide-10.JPG',
//   'Tibet-3.JPG',
//   'Tibet-4.JPG',
//   'Tibet-5.JPG',
//   'Tibet-6.JPG',
//   'Tibet-7.JPG',
//   'Tibet-8.jpg',
//   'Tibet-9.JPG',
//   'Tibet-10.JPG',
//   'Tibet-11.JPG',
//   'Tigerlily-2.jpg',
//   'Tigerlily-5.jpg',
//   'Tigerlily-6.jpg',
//   'Tigerlily-7.jpg',
//   'Tigerlily-9.jpg',
//   'Tigerlily-11.jpg',
//   'Tigerlily-13.jpg',
//   'Tigerlily-18.jpg',
//   'Tigerlily-21.jpg',
//   'Tigerlily-25.jpg',
//   'Tigerlily-31.jpg',
//   'Tigerlily-32.jpg',
//   'Tigerlily-37.jpg',
//   'iScream-1.JPG',
//   'iScream-2.JPG',
//   'iScream-3.JPG',
//   'iScream-4.JPG',
//   'iScream-5.JPG',
//   'iScream-6.JPG',
//   'iScream-7.jpg',
//   'iScream-8.jpg',
// ]

function ImageGrid() {
  const { docs } = useFirestore('images');

  return (
    <GridBox className="img-grid">
      {docs && docs.map(doc => (
          // <div onClick={() => setSelectedImg(doc.url)} key={doc.id}>
          <div key={doc.id}>
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
  /* border-bottom: 6px solid lightgray; */
  /* box-shadow: inset 0 -10px 10px -10px #000000; */
`

const H2 = styled.h2`
  text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
  color: lightgray;
  opacity: .7;
`