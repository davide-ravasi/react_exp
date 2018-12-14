import React from 'react';

const SearchInput = ({searchField,onSearchChange}) => {
    return (
        <div>
            <input name="search" type="text" onChange={onSearchChange} />
        </div>
    )
}

export default SearchInput;