import React from 'react'
import LastSeen from '../../common/LastSeen';

export default function SportNewsCard(prop) {

    let { title, urlToImage, date } = prop;

    return (
        <div style={{
            background: 'white',
            display: 'flex',
            marginBottom: '2px',
            borderRadius: '5px'
        }}>
            <div style={{padding: '5px'}}>
                <img src={urlToImage} alt="images" width="120px" height="100px" />
            </div>
            <div>
                <p style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    padding: '10px 10px 0 10px',
                    marginBottom: '0',
                    color: 'black'
                }}>{title}</p>
                <div style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    color: '#757575',
                    padding: '5px 10px'
                }}>
                <LastSeen date={date} />
                </div>
            </div>
            
            
        </div>
    )
}
