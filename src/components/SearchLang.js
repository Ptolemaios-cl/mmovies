import React from 'react';

const SearchLang = (props) => {
    return (
        <div className="col col-sm-4">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text">Language</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" onChange={(event) => props.setSearchLang(event.target.value)}>
                    <option defaultValue value="en-US">en-US</option>
                    <option value="es-ES">es-ES</option>
                </select>
            </div>
        </div>
    );
};

export default SearchLang;


