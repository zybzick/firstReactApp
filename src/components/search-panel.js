import React from "react";

const SearchPanel = ()=>{
    const searchText = 'search'
    const searchStyle = {
        fontSize: '20px'
    }
    return (
        <input
            type="text"
            placeholder={searchText}
            style={searchStyle}
        />
    )
}

export default SearchPanel;