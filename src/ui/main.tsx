import * as React from "react";
import ContentPage from "./components/content/content";
import TitleBar from "./components/titlebar/titlebar";
import PlayerBar from "./components/playerbar/playerbar";
import { makeStyles } from "@material-ui/core/styles";

const cssStyle = makeStyles({
  bodyCss: {
    margin: 0,
    padding: 0,
  },
  mainBodyCss: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gridTemplateRows: "1fr 13fr 1fr 1fr",
    gridTemplateAreas: ` 
    "header header header header" 
    "main main main main"
    ". . . ."
    "footer footer footer footer"
    `,
    gap: "0.5rem",
  },
});

const Main = () => {
  const classes = cssStyle();
  return (
    <div className={classes.bodyCss}>
      <div className={classes.mainBodyCss}>
        <TitleBar />
        <ContentPage />
        <PlayerBar />
      </div>
    </div>
  );
};

export default Main;
