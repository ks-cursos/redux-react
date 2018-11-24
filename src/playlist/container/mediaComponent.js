import React,{Component} from "react";
import Media from "../component/media";
import {connect} from "react-redux"
class MediaComponent extends Component{
    render(){
        return <Media {...this.props.data} openMOdal={this.props.openMOdal}/>
    }
}
function mapStateToProps(state,props){
    return{
        data:state.data.entities.media[props.id]
    }
}
export default connect(mapStateToProps) (MediaComponent);