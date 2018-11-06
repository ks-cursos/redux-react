import React from "react";
import PLay from "../../icons/components/play"
import Pause from "../../icons/components/pause"
import "./play-pause.css"
const PLayPause = (props) => (
    <div className="PlayPause">
        {
            props.pause ?
                <button onClick={props.handleClick}>
                    <PLay size={25} fill="white" />
                </button>
                :
                <button onClick={props.handleClick}>
                    <Pause size={25} fill="white" />
                </button>
        }
    </div>
)
export default PLayPause;