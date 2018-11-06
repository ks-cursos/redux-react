import React, { Component } from "react";
import "./video.css"
class Video extends Component {
    togglePlay() {
        if (this.props.pausa) {
            this.video.play();
        } else {
            this.video.pause()
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.pausa != this.props.pausa) {
            this.togglePlay();
        }

    }
    setRef = element => {
        this.video = element;
    }
    render() {
        const {
            handleLoadedMetadata,
            handleTimeUpdate,
            handleSeeking,
            handleSeeked
        } = this.props;
        return (
            <div className="Video">
                <video
                    autoPlay={this.props.autoPlay}
                    src={this.props.src}
                    ref={this.setRef}
                    onLoadedMetadata={handleLoadedMetadata} 
                    onTimeUpdate={handleTimeUpdate}
                    onSeeking={handleSeeking}
                    onSeeked={handleSeeked}
                    />
            </div>
        )
    }
}
export default Video;