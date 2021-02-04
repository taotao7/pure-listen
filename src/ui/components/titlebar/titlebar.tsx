import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import CloseIcon from "@material-ui/icons/Close";
import { ipcRenderer } from "electron";

const cssStyle = makeStyles({
  titleBtn: {
    color: "#ffb86c",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 5fr 1fr",
  },
  moveElement: {
    "-webkit-app-region": "drag",
  },
});

const TitleBar = () => {
  const classes = cssStyle();
  return (
    <div className={classes.container} style={{ gridArea: "header" }}>
      <div className={classes.moveElement}></div>
      <div
        className={classes.moveElement}
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        PureListen
      </div>
      <div
        style={{
          justifySelf: "end",
        }}
      >
        <IconButton
          size="small"
          onClick={() => {
            ipcRenderer.send("window-min");
          }}
        >
          <RemoveIcon className={classes.titleBtn} />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => {
            console.log("最大化");
            ipcRenderer.send("window-max");
          }}
        >
          <FullscreenIcon className={classes.titleBtn} />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => {
            ipcRenderer.send("window-close");
          }}
        >
          <CloseIcon className={classes.titleBtn} />
        </IconButton>
      </div>
    </div>
  );
};

export default TitleBar;
