import React from "react";
import "./volume.css"
import VolumenIco from "../../icons/components/volume"

const Volume = (props) => (
    <button className="Volume" onClick={props.handleClickVolume}>
        <VolumenIco fill="white" size={25} />
        <div className="Volume-range">
            <input type="range" min={0} max={1}  step={.05}
            onChange={props.handleChangeVolumen}
            />
        </div>
    </button>
)
export default Volume;