import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import "animate.css";

function NewsSlider({ info }) {

 
  const news = {...info}
  const newsData1 = {...news[18]};
  const newsData2 = {...news[15]};
  const newsData3 = {...news[20]};
  const newsData4 = {...news[12]};
  const newsData5 = {...news[14]};
  //console.log(newsData)
  //console.log(newsData.title)

 const data = [
    {
      image: newsData1.urlToImage,
      caption: newsData1.title
    },
    {
      image: newsData2.urlToImage,
      caption: newsData3.title
    },
    {
      image: newsData3.urlToImage,
      caption: newsData3.title
    },
    {
      image: newsData4.urlToImage,
      caption: newsData4.title
    },
    {
      image: newsData5.urlToImage,
      caption: newsData5.title
    },
    
  ];


  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    padding: '10px'
  }

  return (
    <div className="animate__animated animate__fadeIn">
      <div style={{ textAlign: "center", marginTop: '20px' }}>
        <h2 style={{background: '#E53935', color: 'white', padding: '8px',transform: 'skew(-5deg)', maxWidth: '400px',margin: 'auto'}}>HeadLines</h2>
        <div style={{
          padding: "0 10px"
        }}>
          <Carousel
            data={data}
            time={1500}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="5px"
            //slideNumber={true}
            //slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="grey"
            slideImageFit="cover"
            //thumbnails={true}
            //thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "650px",
              maxHeight: "500px",
              margin: "10px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default NewsSlider;