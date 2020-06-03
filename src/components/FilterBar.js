import React from 'react';

const FilterBar = ({filters, clearFilters, removeFilter}) => {
  return (
    <div className="row filter">
      <div className="col-sm-auto">
        <ul className="list-group list-group-horizontal flex-wrap filter-items">
          {filters.map ((filter, index) => (
            <li className="filter-bullet" key={index}>
              <span className="filter-text">{filter}</span>
              <button
                type="button"
                className="remove"
                onClick={() => {
                  removeFilter (filter);
                }}
              >
                <span>&times;</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="btn clear"
        type="button"
        name="clear"
        onClick={() => clearFilters ()}
      >
        Clear
      </button>
    </div>
  );
};
export default FilterBar;
