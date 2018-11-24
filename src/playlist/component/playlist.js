import React from "react";
import MediaComponent from '../container/mediaComponent';
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
                    (mediaId) => {
                        return <MediaComponent key={mediaId} id={mediaId}  openMOdal={props.handleOpenModal}/>
                    }
                )
            }
        </div>

    );
}
export default PLayList;