import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import CloseIcon from "@material-ui/icons/Close";
import "./titlebar.css";

const css_style: object = {};

const TitleBar = () => {
  return (
    <div className={"container"}>
      <div
        style={{
          paddingTop: 0,
          display: "inline-block",
          color: "white",
          textAlign: "center",
        }}
      >
        PureListen
      </div>
      <IconButton
        size="small"
        style={{
          display: "inline-block",
          position: "fixed",
          right: "2.5rem",
          marginRight: "2.5rem",
        }}
      >
        <RemoveIcon className={"title_btn"} />
      </IconButton>
      <IconButton
        size="small"
        style={{
          display: "inline-block",
          position: "fixed",
          right: "1.5rem",
          marginRight: "1.5rem",
        }}
      >
        <FullscreenIcon className={"title_btn"} />
      </IconButton>
      <IconButton
        size="small"
        style={{
          display: "inline-block",
          position: "fixed",
          right: "0.5rem",
          marginRight: "0.5rem",
        }}
      >
        <CloseIcon className={"title_btn"} />
      </IconButton>
    </div>
  );
};

export default TitleBar;
