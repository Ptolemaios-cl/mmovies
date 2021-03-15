import React from 'react';

const SearchBox = (props) => {
    return (
        <div className="col col-sm-4">
            <div className="input-group mb-3">
                <input 
                    className="form-control" 
                    placeholder="Search..." 
                    value={props.value}
                    onChange={(event) => props.setSearchValue(event.target.value)}
                ></input>
            </div>
        </div>
    );
};

export default SearchBox;