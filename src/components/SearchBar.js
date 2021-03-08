import React from 'react'
import Autocomplete from "@material-ui/lab/Autocomplete"
import { TextField } from "@material-ui/core"

function SearchBar() {

    const options = [{title: 'check title'}]

    return (
        <div className="searchBar">
            <Autocomplete
                id="search-places"
                options={options}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params} label="Search Here" variant="outlined" />}
            />
        </div>
    )
}

export default SearchBar
