import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import NewsTiles from "./middleColumn/NewsTiles";

export default function MiddleColumn({ info, loading }) {
  const news = { ...info };
  const newsData = [
    { ...news[0] },
    { ...news[1] },
    { ...news[2] },
    { ...news[3] },
    { ...news[4] },
    { ...news[5] },
  ];

  const data = [
    {
      image: newsData[0].urlToImage,
      caption: newsData[0].title,
      date: newsData[0].publishedAt,
    },
    {
      image: newsData[1].urlToImage,
      caption: newsData[1].title,
      date: newsData[1].publishedAt,
    },
    {
      image: newsData[2].urlToImage,
      caption: newsData[2].title,
      date: newsData[2].publishedAt,
    },
    {
      image: newsData[3].urlToImage,
      caption: newsData[3].title,
      date: newsData[3].publishedAt,
    },
    {
      image: newsData[4].urlToImage,
      caption: newsData[4].title,
      date: newsData[4].publishedAt,
    },
    {
      image: newsData[5].urlToImage,
      caption: newsData[5].title,
      date: newsData[5].publishedAt,
    },
  ];

  return (
    <div>
      <h5
        style={{
          background: "#E53935",
          color: "white",
          padding: "8px",
          transform: "skew(-5deg)",
        }}
      >
        International News
      </h5>
      <Grid container spacing={1}>
        {loading
          ? ""
          : data.length > 0
          ? data.map((val, key) => {
              return (
                <Grid key={key} item xs={12} sm={6} lg={6}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/internationalDetails/${key}`}
                  >
                    <NewsTiles
                      key={key}
                      newsImage={val.image}
                      newsTitle={val.caption}
                      date={val.date}
                    />
                  </Link>
                </Grid>
              );
            })
          : ""}
      </Grid>
    </div>
  );
}
