import React from 'react'
import LastSeen from '../../common/LastSeen'

export default function NewsTiles({ newsImage, newsTitle, date }) {
    return (
        <div style={{
            background: 'white',
            //padding: '10px',
            height: '100%'
        }}>
            <img src={newsImage} alt='images' style={{ 
                width: '100%',
                maxHeight: '350px',
                height: 'auto',
                marginBottom: '5px',
                objectFit: 'contain',
                
                }}
                />
                <p style={{
                fontSize: '14px',
                fontWeight: '700',
                padding: '15px',
                marginBottom: '0px',
                color: 'black'
                
            }}>{newsTitle}</p>

            <div style={{
              fontSize: '11px',
              fontWeight: '600',
              color: '#757575',
              padding: '0 0 10px 15px '
          }}>
            <LastSeen date={date} />
          </div>
        </div>
    )
}
