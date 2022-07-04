import { Grid } from "@material-ui/core";
import React from "react";
import Loading from "../components/Loading";
import NewsCard from "../components/NewsCard";
import "animate.css";
import { Link } from "react-router-dom";

export default function Temp({ info, loading, postPerPage, post,category }) {
  return (
    <div className="animate__animated animate__fadeIn">
      <Grid container spacing={4}>
        {loading ? (
          <Loading />
        ) : info.length > 0 ? (
          info.map((val, key) => {
            return (
              <Grid key={key} item xs={12} sm={6} lg={4}>
                <Link style={{textDecoration: 'none'}} to={`${category}/${key}`}>
                  <NewsCard
                    key={key}
                    newsImage={val.urlToImage}
                    newsTitle={val.title}
                    date={val.publishedAt}
                    newsDes={val.description}
                  />
                </Link>
              </Grid>
            );
          })
        ) : (
          ""
        )}
      </Grid>
      <div
        style={{
          marginLeft: "35%",
          //marginRight: '50%',

          //textAlign: 'center'
        }}
      >
        {/* <PaginationCom postPerPage={postPerPage} tatalPosts={post.length}/> */}
        {/* <PagiCompo postPerPage={postPerPage} tatalPosts={post} /> */}
      </div>
    </div>
  );
}
