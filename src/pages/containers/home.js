import React, { Component } from "react";
import HomeLayout from "../components/home-layout"
import Categories from "../../categories/components/categories"
import RelatedLayout from "../../pages/components/related-layout"
import ModalContainer from "../../widgets/containers/modal"
import Modal from "../../widgets/components/modal"
import HandleError from "../../error/containers/handle-error"
import VideoPlayer from "../../player/containers/video-player"

class Home extends Component {
    state = {
        modalVisible: false,
        media:null
    }
    handleOpenModal=(media)=>{
        this.setState({
            modalVisible: true,
            media
        })
    }
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false
        })
    }
    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <RelatedLayout />
                    
                    <Categories data={this.props.data} handleOpenModal={this.handleOpenModal} />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleCLick={this.handleCloseModal}>
                                <VideoPlayer src={this.state.media.src} autoPlay={true} title={this.state.media.title}/>
                            </Modal>
                            
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>)
    }
}
export default Home;