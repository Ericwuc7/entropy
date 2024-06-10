import React from 'react';

const images = [
  { src: 'https://www.planetware.com/wpimages/2020/02/india-varanasi-best-places-to-visit-ganges-river.jpg', alt: 'Place 1' },
  { src: 'https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2018/09/Temple-Varanasi.jpg', alt: 'Place 2' },
  { src: 'https://indiator.com/tourist-places/wp-content/uploads/2016/12/Holy-varanasi.jpg', alt: 'Place 3' },
];

function Gallery() {

    let styleImage={
    height:"100px",
    width:"600px",
    padding:"60px",
    display:"Flex",
    flexDirection:"column",
    justifyContent:"spaceBetween"
    }

  return (
    <div className="gallery" style={styleImage}>
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt="oops" />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
