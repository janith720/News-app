import React from 'react'
import { Link } from 'react-router-dom';
import "animate.css";
import SportNewsCard from './sportNewsColumn/SportNewsCard';

export default function SprortNewsColumn({ info, loading }) {

    // const { info, loading } = useFetchHook(
    //     `https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`
    // );

    //const articleData = info.articles;

    const news = {...info}
    const newsData = [
        {...news[0]},
        {...news[1]},
        {...news[2]},
        {...news[3]},
        {...news[4]},
        {...news[5]}
    ]
    
    //console.log(news)
    //console.log(newsData5.publishedAt)
  
   const data = [
      {
        image: newsData[0].urlToImage,
        caption: newsData[0].title,
        date: newsData[0].publishedAt
      },
      {
        image: newsData[1].urlToImage,
        caption: newsData[1].title,
        date: newsData[1].publishedAt
      },
      {
        image: newsData[2].urlToImage,
        caption: newsData[2].title,
        date: newsData[2].publishedAt
      },
      {
        image: newsData[3].urlToImage,
        caption: newsData[3].title,
        date: newsData[3].publishedAt
      },
      {
        image: newsData[4].urlToImage,
        caption: newsData[4].title,
        date: newsData[4].publishedAt
      },
      {
        image: newsData[5].urlToImage,
        caption: newsData[5].title,
        date: newsData[5].publishedAt
      },
      
      
    ];

    return (
        <div className='animate__animated animate__fadeInRight'>
           <div style={{marginTop: '25px'}}>
        <h5 style={{background: '#E53935', color: 'white', padding: '8px',transform: 'skew(-5deg)'}}>Sports News</h5>
        {loading
        ? ""
        : data.length > 0 
        ? data.map((val,key) => {
            return(
                <Link style={{textDecoration: 'none'}} key={key} to={`/sportDetails/${key}`}>
                  <SportNewsCard key={key} title={val.caption} urlToImage={val.image} date={val.date} />
                </Link>
                )
              }): ""}
        
        </div>
        </div>
    )
  }
  // <LatestNewsCard key={key} title={val.title} urlToImage={val.urlToImage} date={val.publishedAt} />
