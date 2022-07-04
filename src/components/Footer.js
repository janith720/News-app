import React from 'react'
import { Grid } from '@material-ui/core'
import { NavLink } from 'react-router-dom';
import Facebook from '../images/facebook.png';
import Twitter from '../images/twitter.png';
import Gmail from '../images/gmail.png';

const footerLinks = {
    "news": [
    
        {
            title: "Local",
            link: "/"
        },
        {
            title: "Business",
            link: "/business"
        },
        {
            title: "Entertainment",
            link: "/entertainment"
        },
        {
            title: "Health",
            link: "/health"
        },
        {
            title: "Science",
            link: "/science"
        },
        {
            title: "Sports",
            link: "/sports"
        },
        {
            title: "Technology",
            link: "/technology"
        }
    ],
    "country": [
        {
            title: "India",
            link: ""
        },
        {
            title: "USA",
            link: ""
        },
        {
            title: "Australia",
            link: ""
        },
        {
            title: "Russia",
            link: ""
        },
        {
            title: "France",
            link: ""
        },
        {
            title: "United Kingdom",
            link: ""
        },
    ]
};

export default function Footer() {
    return (
      <div style={{
        position: 'inherit',
        bottom: '0px',
        width: '100%',
        background: 'black',
        padding: '40px 100px',
        
    }}>
        
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} lg={4}>
                    <div style={{padding: '40px', color: 'white'}}>
                        <p style={{fontWeight: 'bold',fontSize: '20px'}}>News</p>
                        {footerLinks.news.map((val,key) => {
                            return(
                                <NavLink key={key} 
                                activeStyle={{
                                    backgroundColor: 'black',
                                  }} 
                                style={{
                                    textDecoration: 'none',
                                    display: 'block',
                                    color: 'white',
                                    marginBottom: '5px'
                                }}
                                    to={val.link}>
                                    {val.title}
                                </NavLink>
                            )
                        })}
                    </div>
                    
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <div style={{padding: '40px',color: 'white'}}>
                    <p style={{fontWeight: 'bold',fontSize: '20px'}}>Country</p>
                        {footerLinks.country.map((val,key) => {
                            return(
                                <NavLink key={key} 
                                activeStyle={{
                                    backgroundColor: 'black'
                                  }} 
                                style={{
                                    textDecoration: 'none',
                                    display: 'block',
                                    color: 'white',
                                    marginBottom: '5px'
                                }}
                                to={val.link}>
                                {val.title}
                                </NavLink>
                            )
                        })}
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <div style={{padding: '40px', color: 'white'}}>
                    <p style={{fontWeight: 'bold',fontSize: '20px'}}>Contact us</p>
                    <div>
                    <img src={Gmail} alt="fb" width="45px"  style={{margin: '5px'}}/>
                    <img src={Facebook} alt="fb" width="45px" style={{margin: '5px'}}/>
                    <img src={Twitter} alt="fb" width="45px" style={{margin: '5px'}}/>
                    </div>
                    
                    </div>
                </Grid>
            </Grid>
            <div style={{textAlign: 'center',marginTop: '20px',padding: '10px'}}>
            <small style={{color: 'white'}}>&copy; Copyright {new Date().getFullYear()}, WAVE OF NEWS</small>
            </div>
        </div>
        
    </div>
    )
}
