import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

const cssStyle = makeStyles({
    container: {
        display: "grid",
        backgroundColor: "#44475A",
    },
});

const PlayerBar = () => {
    const classes = cssStyle();

    return (
        <div
            style={{
                gridArea: "footer",
                gridTemplateColumns: "1fr 4fr 6fr 4fr 1fr",
                justifyItems: "center",
                alignItems: "center",
            }}
            className={classes.container}
        >
            <div></div>
            <div>Now Playing</div>
            <div>
                <div>
                    <SkipPreviousIcon/>
                    <PlayArrowIcon/>
                    <SkipNextIcon/>
                </div>
                <div>
                    <LinearProgress
                        variant="determinate"
                        color={"secondary"}
                        value={50}
                    />
                </div>
            </div>
            <div>
                <ShuffleIcon/>
                <VolumeUpIcon
                    onClick={() => {
                    }}
                />
                <PlaylistPlayIcon/>
            </div>
            <div></div>
        </div>
    );
};

export default PlayerBar;
