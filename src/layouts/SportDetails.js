import React from "react";
import Grid from "@material-ui/core/Grid";
import TitleAndDescription from "../components/NewsDetails/TitleAndDescription";
import CommonLayout from "./common/CommonLayout";
import { useParams } from "react-router-dom";
import "animate.css";
import axios from "axios";
import OtherNews from "../components/homePage/OtherNews";

export default function SportDetails() {

    const { id } = useParams()

    const [sportNews, setSportNews] = React.useState([]);

    React.useEffect(() => {
        axios
          .get(`https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`)
          .then((responce) => setSportNews(responce.data.articles))
          //console.log(state)
      }, []);

  return (
    <CommonLayout>
      <div className="animate__animated animate__fadeInUp">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7} lg={9}>
            <TitleAndDescription localNews={sportNews[id]} />
          </Grid>
          <Grid item xs={12} sm={5} lg={3}>
            <OtherNews />
          </Grid>
        </Grid>
      </div>
    </CommonLayout>
  );
}
