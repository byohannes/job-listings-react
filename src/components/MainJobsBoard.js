import React, {useState} from 'react';
import data from '../data.json';
import JobBoard from './JobBoard';
import FilterBar from './FilterBar';

const MainContent = () => {
  const [listings, setListings] = useState (data);
  const [filters, setFilters] = useState ([]);

  const addTagToFilter = tag => {
    if (filters.indexOf (tag) !== -1) return;

    const newFilters = [...filters, tag];
    setFilters (newFilters);
  };

  const removeTagFromFilter = tag => {
    const newFilters = filters.filter (item => {
      return item !== tag;
    });

    setFilters (newFilters);
  };

  const clearFilters = () => {
    setFilters ([]);
  };
  return (
    <div>
       <FilterBar
        filters={filters}
        clearFilters={clearFilters}
        removeFilter={removeTagFromFilter}
      /> 
      <div className="container-fluid">
        {listings.map (data => {
          const languages = data.languages || [];
          const tools = data.tools || [];
          const tagList = [data.role, data.level, ...languages, ...tools];
          for (let i = 0; i < filters.length; i++) {
            if (tagList.indexOf (filters[i]) === -1) return null;
          }
          return (
            <JobBoard
              data={data}
              key={data.id}
              addTag={addTagToFilter}
              tagList={tagList}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainContent;
