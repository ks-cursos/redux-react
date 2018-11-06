import React from "react";
import Categori from "./category"
import SearchContainer from "../../widgets/containers/search-container"
import "./categories.css"
function Categories(props) {
    const categoriesList = props.data.categories;
    return (
        <div className="Categories">
        <SearchContainer/>
            {
                categoriesList.map((cat) => {
                    return (<Categori key={cat.id} {...cat}  handleOpenModal={props.handleOpenModal} />)
                })
            }
        </div>
    );
}
export default Categories;