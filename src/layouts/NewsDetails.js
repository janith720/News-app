import React from "react";
import CommonLayout from "./common/CommonLayout";
import { useParams } from "react-router-dom";
import TitleAndDescription from "../components/NewsDetails/TitleAndDescription";
import Grid from "@material-ui/core/Grid";
import "animate.css";
import axios from "axios";
import OtherNews from "../components/homePage/OtherNews";

export default function NewsDetails() {

  const { id } = useParams();

  const [localNews, setLocalNews] = React.useState([]);
  

  React.useEffect(() => {
    axios
      .get(`https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`)
      .then((responce) => setLocalNews(responce.data.articles))
      //console.log(state)
  }, []);


  return (
    <CommonLayout>
      <div className="animate__animated animate__fadeInUp">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7} lg={9}>
            <TitleAndDescription localNews={localNews[id]}  />
          </Grid>
          <Grid item xs={12} sm={5} lg={3}>
            <OtherNews />
          </Grid>
        </Grid>
      </div>
    </CommonLayout>
  );
}
