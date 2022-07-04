import Button from "@material-ui/core/Button";
import React from "react";
import LastSeen from "./common/LastSeen";
//import image1 from '../images/image1.jpg'

export default function NewsCard({ newsTitle, date, newsDes, newsImage }) {
  return (
    <div
      style={{
        background: "white",
        height: "600px",
        width: "100%",
        //padding: '20px',
        //textAlign: 'center',
        borderRadius: "5px",
      }}
    >
      <img
        src={newsImage}
        alt="images"
        style={{
          width: "100%",
          maxHeight: "350px",
          height: "auto",
          marginBottom: "5px",
          objectFit: "contain",
        }}
      />
      <p
        style={{
          fontSize: "18px",
          fontWeight: "600",
          padding: "10px",
          margin: "15px 15px 0 15px",
          color: "black",
        }}
      >
        {newsTitle}
      </p>
      <div style={{
        fontSize: '12px',
        fontWeight: '600',
        marginLeft: '25px',
        color: '#757575',
        marginBottom: '0px'
      }}>
        <LastSeen date={date} />
      </div>
      
      <p
        style={{
          fontSize: "15px",
          color: "#757575",
          textAlign: "justify",
          padding: "10px",
          margin: "0 15px 10px 15px",
        }}
      >
        {newsDes}
      </p>

      <Button
        variant="contained"
        style={{ backgroundColor: "black", color: "white", marginLeft: "25px" }}
      >
        See more
      </Button>
    </div>
  );
}
