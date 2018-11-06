import React from "react";
import PLayList from "../../playlist/component/playlist"
import "./category.css"
function Category(props) {
    return (
        <div className="Category">
            <p className="Category-description">{props.description}</p>
            <h2 className="Category-title" >{props.title}</h2>
            <PLayList playlist= {props.playlist} handleOpenModal={props.handleOpenModal} />
        </div>
    );
}
export default Category;