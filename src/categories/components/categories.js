import React from "react";
import Categori from "./category"
import SearchContainer from "../../widgets/containers/search-container"
import Media from "../../playlist/component/media"
import "./categories.css"
function Categories(props) {
    const categoriesList = props.categories;
    return (
        <div className="Categories">
            <SearchContainer />
            {
                props.search.map((item) => {
                    return <Media {...item} key={item.id} />
                })
            }

            {
                categoriesList.map((cat) => {
                    return (<Categori key={cat.id} {...cat} handleOpenModal={props.handleOpenModal} />)
                })
            }
        </div>
    );
}
export default Categories;