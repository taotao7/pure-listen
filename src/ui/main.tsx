import { Grid } from "@material-ui/core";
import * as React from "react";
import ContentPage from "./components/content/content";
import SongList from "./components/songlist/songlist";
import TitleBar from "./components/titlebar/titlebar";
import { makeStyles } from "@material-ui/core/styles";

const cssStyle = makeStyles({
  bodyCss: {
    margin: 0,
    padding: 0,
  },
  mainBodyCss: {
    display: "grid",
    gridTemplateAreas: ` 
    "header header header header" 
    "leftPanel main main main"
    "footer footer footer footer"
    `,
    gridGap: "1rem",
  },
});

const Main = () => {
  const classes = cssStyle();
  return (
    <div className={classes.bodyCss}>
      <TitleBar />
      <div className={classes.mainBodyCss}>
        <SongList />
        <ContentPage />
      </div>
    </div>
  );
};

export default Main;
