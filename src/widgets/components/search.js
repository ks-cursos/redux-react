import React from "react";
import "./search.css"
const Search=(props)=>(
    <form onSubmit={props.handleSumit} className="Search">
        <input onChange={props.handleChange} value={props.value} type="text" className="Search-input" placeholder="Busca tu video favorito" ref={props.setRef} id="search" name="search"/>
    </form>
    )

export default Search;