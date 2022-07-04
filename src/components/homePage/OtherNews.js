import React from 'react'
import OtherNewsCard from './otherNews/OtherNewsCard'
import bcc from '../../images/bbc.png'
import cnn from '../../images/cnn.png'
import fox from '../../images/fox.png'
import google from '../../images/google.png'


const providersInfo = [
    {
        pic: bcc,
        title: 'BBC News',
        link: 'https://www.bbc.com/news'
    },
    {
        pic: cnn,
        title: 'CNN',
        link: 'https://edition.cnn.com/'
    },
    {
        pic: fox,
        title: 'fox-news',
        link: 'https://www.foxnews.com/'
    },
    {
        pic: google,
        title: 'Google News',
        link: 'https://news.google.com/'
    },

]

export default function OtherNews() {
    return (
        <div style={{marginTop: '35px'}}>

            <h5 style={{background: '#E53935', color: 'white', padding: '8px',transform: 'skew(-5deg)'}}>News Providers</h5>
            {providersInfo.map((val,key) => {
                return(
                    <OtherNewsCard key={key} title={val.title} pic={val.pic} link={val.link} />
                )
            })}
            
        </div>
    )
}
