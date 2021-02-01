import * as React from "react";
import * as ReactDOM from "react-dom";
import TitleBar from "./components/titlebar";

const css_style: object = {
  margin: 0,
  padding: 0,
};

const Main = () => {
  return (
    <div style={css_style}>
      <TitleBar />
      这是首页
    </div>
  );
};

export default Main;
