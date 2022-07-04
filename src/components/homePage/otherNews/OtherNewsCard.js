import React from 'react'

export default function OtherNewsCard({ title, pic, link }) {
    return (
        <div>
            <div style={{
                background: 'white', 
                display: 'flex',
                marginBottom: '2px',
                //padding: '5px',
                borderRadius: '4px'
                }}>
                <div>
                    <img src={pic} alt="gffg" width="120px" />
                </div>
                <div style={{padding: '25px', fontSize: '18px',fontWeight: '600', color: '#616161'}}>
                    <a style={{textDecoration: 'none'}} href={link}>

                    <p style={{color: 'black'}}>{title}</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
