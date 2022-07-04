import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import General from "./layouts/General";
import NewsDetails from "./layouts/NewsDetails";
//import { useFetchHook } from "./customHook/useFetchHook";
import React from "react";
import OtherPagesLayout from "./layouts/OtherPagesLayout";
import axios from "axios";
import OtherPagesDetails from "./layouts/OtherPagesDetails";
import SportDetails from "./layouts/SportDetails";
import InterDetails from "./layouts/InterDetails";

const otherPages = [
  // {
  //   path: "/general",
  //   title: "General",
  //   cat: 'general'
  // },
  {
    path: "/business",
    title: "Business",
    cat: "business",
  },
  {
    path: "/entertainment",
    title: "Entertainment",
    cat: "entertainment",
  },
  {
    path: "/health",
    title: "Health",
    cat: "health",
  },
  {
    path: "/science",
    title: "Science",
    cat: "science",
  },
  {
    path: "/sports",
    title: "Sports",
    cat: "sports",
  },
  {
    path: "/technology",
    title: "Technology",
    cat: "technology",
  },
];

function App() {
  const [state, setState] = React.useState({ info: [], loading: true });
  const [categories, setCategories] = React.useState("general");

  React.useEffect(() => {
    axios
      .get(
        `https://saurav.tech/NewsAPI/top-headlines/category/${categories}/in.json`
      )
      .then((responce) =>
        setState({ info: responce.data.articles, loading: false })
      )
      .catch((error) => {
        console.log(error.response);
      });
    // console.log(state);
    // console.log(categories);
  }, [categories]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={General} />
          <Route path="/newsDetails/:id" component={NewsDetails} />
          <Route path="/sportDetails/:id" component={SportDetails} />
          <Route path="/internationalDetails/:id" component={InterDetails} />

          {otherPages.map((val, key) => {
            return (
              <Route
                key={key}
                path={`${val.path}/:id`}
                component={() => {
                  return (
                    <OtherPagesDetails info={state.info} />
                  );
                }}
              />
            );
          })}

          {otherPages.map((val, key) => {
            return (
              <Route
                key={key}
                path={val.path}
                component={() => {
                  return (
                    <OtherPagesLayout
                      title={val.title}
                      info={state.info}
                      category={val.path}
                      handleCat={() => setCategories(val.cat)}
                      //handleCat={() => console.log(val.cat)}
                    />
                  );
                }}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
