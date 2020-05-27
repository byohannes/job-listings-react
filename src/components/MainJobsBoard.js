import React from 'react';
import data from '../data.json';
import JobBoard from './JobBoard';

function MainContent () {
  return (
    <div className="container-fluid">
      {data.map (job => (
          
        <JobBoard
          key={job.id}
          company={job.company}
          logo={job.logo}
          new={job.new}
          featured={job.featured}
          position={job.position}
          role={job.role}
          level={job.level}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          languages={job.languages}
          tools={job.tools}
        />
      ))}
    </div>
  );
}

export default MainContent;
