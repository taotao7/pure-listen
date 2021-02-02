import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import CloseIcon from "@material-ui/icons/Close";
import { ipcRenderer } from "electron";
import "./titlebar.css";

const TitleBar = () => {
  return (
    <div className={"container"}>
      <div className={"move_element"} />
      <div
        className={"move_element"}
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
          <RemoveIcon className={"title_btn"} />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => {
            console.log("最大化");
            ipcRenderer.send("window-max");
          }}
        >
          <FullscreenIcon className={"title_btn"} />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => {
            ipcRenderer.send("window-close");
          }}
        >
          <CloseIcon className={"title_btn"} />
        </IconButton>
      </div>
    </div>
  );
};

export default TitleBar;
