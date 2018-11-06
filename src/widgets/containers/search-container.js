import React, { Component } from "react";
import Search from "../components/search"
class SeachContainer extends Component {
    state={
        value:"Dayanas"
    }
    handleSumit=event=>{
        event.preventDefault();
        console.log(this.input.value,"submit")
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
export default SeachContainer;