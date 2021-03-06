import React, { PureComponent } from "react";
import PropTypes from "prop-types"
import "./media.css";
class Media extends PureComponent {
    state={
        author:this.props.author
    }
    
    
    //constructor(props) {
      //  super(props);
        //this.state = {
          //  author: props.author
      //  }
        //  this.handleClick=this.handleClick.bind(this);
    //}
    
    handleClick = (eve) => {
        this.props.openMOdal(this.props)
    }
    render() {
        const style = {
            container: {
                fontSize: 14,
                backgroundColor: 'white',
                color: '#44546B',
                cursor: "pointer",
                width: 260,
                border: '1px solid red'
            }
        }
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover" >
                    <img className="Media-image" src={this.props.cover}
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        );
    }
    
    
}
Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    autthor: PropTypes.string,
    type: PropTypes.oneOf(["video", "audio"])
}
export default Media;