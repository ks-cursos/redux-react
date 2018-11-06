import React from "react";
import Media from '../playlist/component/media';
import "./playlist.css";
import PLay from "../icons/components/play"
import Pause from "../icons/components/pause"
import FullScreen from "../icons/components/fullScreen"
import Volumen from "../icons/components/volume"

function PLayList(props) {
    const categoriesList = props.data.categories;
    return (
        <div>
            <PLay size="50" fill="red"/>
            <Pause size="50" fill="red"/>
            <FullScreen size="50" fill="red"/>
            <Volumen size="50" fill="red"/>
            {
                categoriesList.map((cat) => {
                    return <div key={cat.id} className="Playlist">
                        {
                            cat.playlist.map(
                                (item) => {
                                    return <Media key={item.id} {...item} />
                                }
                            )
                        }
                    </div>
                })
            }
        </div>
    );
}
export default PLayList;