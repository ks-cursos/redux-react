import React, { Component } from "react";
import Search from "../components/search"
import {connect} from "react-redux"
class SeachContainer extends Component {
    state={
        value:"Dayana"
    }
    handleSumit=event=>{
        event.preventDefault();
        console.log(this.input.value,"submit")
        this.props.dispatch({
            type:"SEARCH_VIDEO",
            payload:{
                query:this.input.value,
            }
        })
    }
    setInputRef=element=>{
        this.input=element;
    }
    handleInputChange=event=>{
        this.setState({value:event.target.value.replace(' ','-')})
    }
    render() {
        return (<Search  handleChange={this.handleInputChange} value={this.state.value} setRef={this.setInputRef} handleSumit={this.handleSumit}/>)
    }
}
export default connect()(SeachContainer);