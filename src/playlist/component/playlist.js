import React from "react";
import Media from './media';
import "./playlist.css";
import PLay from "../../icons/components/play"
import Pause from "../../icons/components/pause"
import FullScreen from "../../icons/components/fullScreen"
import Volumen from "../../icons/components/volume"

function PLayList(props) {
    return (
        <div key={props.id} className="Playlist">
            {
                props.playlist.map(
                    (item) => {
                        return <Media key={item.id} {...item}  openMOdal={props.handleOpenModal}/>
                    }
                )
            }
        </div>

    );
}
export default PLayList;