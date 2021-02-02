import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const cssStyle = makeStyles({
  cardColor: {
    backgroundColor: "#BD93F9",
    fontSize: "10px",
  },
  cardListCss: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(4,1fr) minmax(10px,300px)",
    backgroundColor: "#44475A",
    gap: "1rem",
  },
});

const SongList = () => {
  const classes = cssStyle();

  return (
    <div className={classes.cardListCss}>
      <Card className={classes.cardColor}>
        <IconButton>
          <LibraryMusicIcon fontSize={"small"} />
          <p>我的歌单</p>
        </IconButton>
      </Card>
      <Card className={classes.cardColor}>
        <IconButton>
          <LibraryMusicIcon fontSize={"small"} />
          <p>我的歌单</p>
        </IconButton>
      </Card>
      <Card className={classes.cardColor}>
        <IconButton>
          <LibraryMusicIcon fontSize={"small"} />
          <p>我的歌单</p>
        </IconButton>
      </Card>
    </div>
  );
};

export default SongList;
