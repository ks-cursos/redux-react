import React, { Component } from "react";
import VideoPlayerLayout from "../components/video-player-layout"
import Video from "../components/video"
import Title from "../components/title"
import PlayPause from "../components/play-pause"
import Timer from "../components/timer"
import Controls from "../components/video-player-controls"
import ProgressBar from "../components/progress-bar"
import Volume from "../components/volume"
import Spinner from "../components/spinner"
import FullScreen from "../components/full-screen"

import { formattedTime, isFullScreen, requestFullScreen, exitFullScreen } from "../../util/util.js"
class VideoPlayer extends Component {

    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false,
        lastVolume: 0
    }
    handleTooglePLay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }
    handleChangeProgress = (event) => {
        this.video.currentTime = event.target.value;

    }
    componentDidMount() {

        this.setState({
            pause: (!this.props.autoPlay)
        })
    }
    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration
        })
    }
    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }
    handleSeeking = (event) => {
        this.setState({
            loading: true
        })
    }
    handleSeeked = (event) => {
        this.setState({
            loading: false
        })
    }
    handleChangeVolumen = event => {

        this.video.volume = event.target.value;
    }
    handleClickVolume = event => {
        if (this.video.volume != 0) {
            this.setState({
                lastVolume: this.video.volume
            })
            this.video.volume = 0;
        }
        else {
            this.video.volume = this.state.lastVolume;
        }
    }
    handleClickFull = event => {
        if (isFullScreen(document))
            exitFullScreen(document)
        else
            requestFullScreen(this.player);
    }
    setRefPlayer = element => {
        this.player = element;
    }
    render() {
        return (
            <VideoPlayerLayout setRefPlayer={this.setRefPlayer}>
                <Title title={this.props.title} />
                <Controls>
                    <PlayPause pause={this.state.pause} handleClick={this.handleTooglePLay} />
                    <Timer currentTime={formattedTime(this.state.currentTime)} duration={formattedTime(this.state.duration)} />
                    <ProgressBar duration={this.state.duration} currentTime={this.state.currentTime} handleChangeProgress={this.handleChangeProgress} />
                    <Volume handleClickVolume={this.handleClickVolume} handleChangeVolumen={this.handleChangeVolumen} />
                    <FullScreen handleClickFull={this.handleClickFull} />
                </Controls>
                {this.state.loading && <Spinner />}
                <Video
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    pausa={this.state.pause}
                    autoPlay={this.props.autoPlay}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    src={this.props.src} />
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer;