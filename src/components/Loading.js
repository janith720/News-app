import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
  return (
      <div style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '200px',
      }}>
          <CircularProgress color="black" disableShrink />
      </div>
    
  )
}