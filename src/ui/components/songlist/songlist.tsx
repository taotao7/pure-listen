import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonIcon from "@material-ui/icons/Person";

const cssStyle = makeStyles({
  cardListCss: {
    display: "grid",
    gridTemplateColumns: "1fr",
    backgroundColor: "#44475A",
    gap: "5px",
  },
  cardColor: {
    marginTop: "2px",
    display: "grid",
    backgroundColor: "#BD93F9",
    gridTemplateColumns: "20% 80%",
    gridAutoRows: "minmax(20px,10px)",
    alignItems: "center",
    justifyItems: "start",
    boxShadow: "2px 2px 2px #ffb86c",
    border: "1px solid #ffb86c",
  },
});

const SongList = () => {
  const classes = cssStyle();

  return (
    <div className={"leftPanel" + " " + classes.cardListCss}>
      <div
        className={classes.cardColor}
        onClick={() => {
          console.log("测试点击");
        }}
      >
        <LibraryMusicIcon fontSize={"small"} />
        <p>我的歌单</p>
      </div>
      <div className={classes.cardColor}>
        <LibraryMusicIcon fontSize={"small"} />
        <p>我的歌单</p>
      </div>
      <div className={classes.cardColor}>
        <LibraryMusicIcon fontSize={"small"} />
        <p>我的歌单</p>
      </div>
      <div>
        <SettingsIcon />
        <PersonIcon />
      </div>
    </div>
  );
};

export default SongList;
