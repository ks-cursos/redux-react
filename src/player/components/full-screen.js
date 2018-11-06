import React from "react";
import "./full-screen.css"
import FullScreenIcon from "../../icons/components/fullScreen"

const FullScreen = (props) => (
    <div className="FullScreen" onClick={props.handleClickFull}>
        <FullScreenIcon fill="white" size={25} />
        
    </div>
)
export default FullScreen;