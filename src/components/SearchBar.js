import React from 'react'
import Autocomplete from "@material-ui/lab/Autocomplete"
import { TextField } from "@material-ui/core"

function SearchBar({setShow, setShowData}) {

    const options = [{title: 'Data 1'}, {title: 'Data 2'}, {title: 'Data 3'}, {title: 'Data 4'}]

    return (
        <div className="searchBar">
            <Autocomplete
                id="search-places"
                options={options}
                getOptionLabel={(option) => option.title}
                getOptionSelected={(option, value) => {
                    return option.value === value.value;
                }}
                onChange={(event, value) => {
                    setShowData(value.title);
                    setShow(true);
                }}
                renderInput={(params) => <TextField {...params} label="Search Here" variant="outlined" />}
            />
        </div>
    )
}

export default SearchBar
