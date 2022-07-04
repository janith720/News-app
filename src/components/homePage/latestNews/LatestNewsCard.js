import React from 'react';
import LastSeen from '../../common/LastSeen';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     marginBottom: '1px',
//     cursor: 'pointer',
    
//   },
//   details: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   title: {
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   date: {
//     fontSize: '12px',
//     fontWeight: '600',
//     color: '#757575'
//   },
//   content: {
//     flex: '1 0 auto',
//   },
//   cover: {
//     //width: 250,
//     //height: 100,
//     padding: 50,
//   },
//   controls: {
//     display: 'flex',
//     alignItems: 'center',
//     paddingLeft: theme.spacing(1),
//     paddingBottom: theme.spacing(1),
//   },
//   playIcon: {
//     height: 38,
//     width: 38,
//   },
// }));

export default function LatestNewsCard({ title, urlToImage, date }) {
    
  
  return (
   
    <div style={{
      background: 'white',
      marginBottom: '5px',
      textDecoration: 'none'
  }}>
      <div style={{textAlign: "center"}}>
          <img src={urlToImage} alt="latestimg" style={{
              width: '100%',
              maxHeight: '350px',
              height: 'auto',
              marginBottom: '5px',
              objectFit: 'contain',
          }}  />
      </div>
      <div style={{padding: '5px'}}>
          <p style={{
              fontSize: '14px',
              fontWeight: '700',
              padding: '10px 10px 0 10px',
              marginBottom: '0',
              color: 'black'
              
          }}>{title}</p>
          <div style={{
              fontSize: '11px',
              fontWeight: '600',
              color: '#757575',
              padding: '5px 10px',

          }}>
          <LastSeen date={date} />
          </div>
          
      </div>
      
      
  </div>
  );
}
