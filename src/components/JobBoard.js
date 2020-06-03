import React from 'react';

const JobBoard = ({data, addTag, tagList}) => {
  return (
    <div className={'row item ' + (data.featured === true && 'item-featured')}>
      <div className="col-md-2 image">
        <img className="company-logo" src={data.logo} alt="job-icon" />
      </div>
      <div className="col-md-4">
        <div className="row item-top-row">
          <div className="col-xs-4 align-self-center">
            <h5 className="company photosnap">{data.company}</h5>
          </div>
          {data.new &&
            <div className="col-xs-4">
              <div className="new-carat">
                <p className="carat-text">New!</p>
              </div>
            </div>}
          {data.featured &&
            <div className="col-xs-4">
              <div className="featured-carat">
                <p className="carat-text">Featured</p>
              </div>
            </div>}
        </div>

        <div className="row item-middle-row">
          <p className="job-title">{data.position}</p>
        </div>

        <div className="row item-bottom-row">
          <ul className="list-group list-group-horizontal">
            <li className="bullet">{data.postedAt}</li>
            <span className="dot" />
            <li className="bullet">{data.contract}</li>
            <span className="dot" />
            <li className="bullet">{data.location}</li>
          </ul>
        </div>
      </div>
      <div className="col-md-6 align-self-center skills-section">
        <div className="skills">
          <ul className="list-group list-group-horizontal flex-wrap skills-list">
            {tagList.map ((tag, index) => (
              <li key={index} className="skill-bullet">
                <span className="skill-text" onClick={() => addTag (tag)}>
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
