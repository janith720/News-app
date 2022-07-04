import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function CommonLayout(prop) {

    let { handleCat } = prop;

    return (
        <div>
            <Header handleCat={handleCat} />
            <div style={{padding: "0 5%",marginTop: '20px', marginBottom: '200px'}}>
                {prop.children}
            </div>
            {/* <div style={{padding: "0 8%",marginTop: '20px'}}>
                {prop.children}
            </div> */}
            <Footer />
        </div>
    )
}
