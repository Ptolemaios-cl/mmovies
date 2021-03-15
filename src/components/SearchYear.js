import React from 'react';

const SearchYear = (props) => {
    return (
        <div className="col col-sm-4">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text">Filter Per Year</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" onChange={(event) => props.setSearchYear(event.target.value)}>
                    <option defaultValue>Choose...</option>
                    <option value="1984">1984</option>
                    <option value="1985">1985</option>
                    <option value="1986">1986</option>
                    <option value="1987">1987</option>
                    <option value="1988">1988</option>
                </select>
            </div>
        </div>
    );
};

export default SearchYear;