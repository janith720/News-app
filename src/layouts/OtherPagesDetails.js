import React from 'react'
import Grid from '@material-ui/core/Grid'
import CommonLayout from './common/CommonLayout'
import TitleAndDescription from '../components/NewsDetails/TitleAndDescription'
import "animate.css";
import { useParams } from 'react-router-dom'
import OtherNews from '../components/homePage/OtherNews'


export default function OtherPagesDetails({ info }) {

    const { id } = useParams()
    //console.log(info[id])

  return (
    
        <CommonLayout>
      <div className="animate__animated animate__fadeInUp">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7} lg={9}>
            <TitleAndDescription localNews={info[id]}  />
          </Grid>
          <Grid item xs={12} sm={5} lg={3}>
            <OtherNews />
          </Grid>
        </Grid>
      </div>
    </CommonLayout>
    
  )
}
