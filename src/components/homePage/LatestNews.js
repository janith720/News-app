import React from 'react'
import LatestNewsCard from './latestNews/LatestNewsCard'
import "animate.css";
import { Link } from 'react-router-dom'

export default function LatestNews({ info, loading }) {
    
  //console.log(info)
  const news = {...info}
  const newsData = [
    {...news[0]},
    {...news[1]},
    {...news[2]},
    {...news[3]},
    {...news[4]},
    
]

//console.log(newsData)
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
  
  
    
  ];

    return (
        <div className='animate__animated animate__fadeInLeft' style={{marginTop: '25px'}}>
        <h5 style={{background: '#E53935', color: 'white', padding: '8px',transform: 'skew(-5deg)'}}>Latest News</h5>
        {loading
        ? ""
        : data.length > 0 
        ? data.map((val,key) => {
            return(
                
                 <Link style={{textDecoration: 'none'}} key={key} to={`/newsDetails/${key}`}>
                <LatestNewsCard 
                    
                    key={key} 
                    title={val.caption} 
                    urlToImage={val.image} 
                    date={val.date} 
                />
                </Link>   
                
            )
        }): ""}
        
        </div>
    )
}
