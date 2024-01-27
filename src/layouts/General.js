import { Grid } from "@material-ui/core";
import React from "react";
import LatestNews from "../components/homePage/LatestNews";
import MiddleColumn from "../components/homePage/MiddleColumn";
import NewsSlider from "../components/homePage/NewsSlider";
import OtherNews from "../components/homePage/OtherNews";
import SprortNewsColumn from "../components/homePage/SprortNewsColumn";
import CommonLayout from "./common/CommonLayout";
import "animate.css";
import axios from "axios";

export default function General() {
  const [state1, setState1] = React.useState([]);
  const [state2, setState2] = React.useState([]);
  const [state3, setState3] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`)
      .then((responce) => setState1(responce.data.articles));
  }, []);

  React.useEffect(() => {
    axios
      .get(`https://saurav.tech/NewsAPI/top-headlines/category/general/us.json`)
      .then((responce) => setState2(responce.data.articles));
  }, []);

  React.useEffect(() => {
    axios
      .get(`https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`)
      .then((responce) => setState3(responce.data.articles));
  }, []);

  return (
    <CommonLayout>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} lg={3}>
            <LatestNews info={state1} />
          </Grid>
          <Grid item xs={12} sm={7} lg={6}>
            <NewsSlider info={state1} />
            <MiddleColumn info={state2} />
          </Grid>
          <Grid item xs={12} sm={5} lg={3}>
            <SprortNewsColumn info={state3} />
            <OtherNews />
          </Grid>
        </Grid>
      </div>
    </CommonLayout>
  );
}
