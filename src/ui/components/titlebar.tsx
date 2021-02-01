import * as React from "react";
import MinimizeIcon from "@material-ui/icons/Minimize";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import CloseIcon from "@material-ui/icons/Close";

const css_style: object = {
  "-webkit-app-region": "drag",
  "background-color": "#282A36",
  color: "white",
  padding: 0,
  margin: 0,
};
const btnColor: object = {
  color: "#FFB86C",
};

const TitleBar = () => {
  const [mouseOverFlag, setMouseOverFlag] = React.useState({
    min: false,
    full: false,
    close: false,
  });

  return (
    <div style={css_style}>
      <div
        style={{
          paddingTop: 0,
          textAlign: "center",
          display: "inline-block",
        }}
      >
        PureListen
      </div>
      <div
        style={{
          display: "inline-block",
          position: "fixed",
          right: "2.5rem",
          marginRight: "2.5rem",
        }}
        onMouseOver={() => {
          console.log("鼠标触摸le");
          setMouseOverFlag({ min: true, full: false, close: false });
        }}
        onMouseLeave={() => {
          setMouseOverFlag({ min: false, full: false, close: false });
        }}
      >
        {mouseOverFlag.min != true ? (
          <MinimizeIcon style={btnColor} />
        ) : (
          <FullscreenIcon />
        )}
      </div>
      <div
        style={{
          display: "inline-block",
          position: "fixed",
          right: "1.5rem",
          marginRight: "1.5rem",
        }}
      >
        <FullscreenIcon style={btnColor} />
      </div>
      <div
        style={{
          display: "inline-block",
          position: "fixed",
          right: "0.5rem",
          marginRight: "0.5rem",
        }}
      >
        <CloseIcon style={btnColor} />
      </div>
    </div>
  );
};

export default TitleBar;
