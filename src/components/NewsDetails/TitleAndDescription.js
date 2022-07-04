import React from "react";
import LastSeen from "../common/LastSeen";

export default function TitleAndDescription({ localNews }) {
  //var title = localNews.title
  const loNews = { ...localNews };
  //const spoNews = { ...sportNews };

  var title = loNews.title;
  var date = loNews.publishedAt;
  var author = loNews.author;
  var image = loNews.urlToImage;
  var content = loNews.content;
  var description = loNews.description;


  //console.log(news);
  return (
    <div>
      <h1 style={{ padding: "10px", marginTop: "15px",fontWeight: '700' }}>{title}</h1>
      <div style={{marginLeft: '15px',fontSize: '15px',color: '#757575'}}>
        <LastSeen date={date} />
      </div>
      <p style={{padding: '15px',color: '#EF5350'}}>By {author}</p>
      <div style={{padding: '10px',marginBottom: '20px'}}>
        <img
          src={image}
          alt="detailsImg"
          style={{
            width: "100%",
            maxHeight: "350px",
            height: "auto",
            marginBottom: "5px",
            objectFit: "contain",
          }}
        />
      </div>
      <div style={{fontSize: '18px',padding: '15px'}}>
        <p>{content}</p>
        <p>{description}</p>
      </div>
      <hr />
    </div>
  );
}
