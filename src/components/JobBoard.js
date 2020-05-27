import React from 'react';

function JobBoard (props) {
  const skills = [props.role, props.level, ...props.languages, ...props.tools];

  return (
    <div className={'row item ' + (props.featured === true && 'item-featured')}>
      <div className="col-md-2 image">
        <img className="company-logo" src={props.logo} alt="job-icon" />
      </div>
      <div className="col-md-4">
        <div className="row item-top-row">
          <div className="col-xs-4 align-self-center">
            <h5 className="company photosnap">{props.company}</h5>
          </div>
          {props.new &&
            <div className="col-xs-4">
              <div className="new-carat">
                <p className="carat-text">New!</p>
              </div>
            </div>}
          {props.featured &&
            <div className="col-xs-4">
              <div className="featured-carat">
                <p className="carat-text">Featured</p>
              </div>
            </div>}
        </div>

        <div className="row item-middle-row">
          <p className="job-title">{props.position}</p>
        </div>

        <div className="row item-bottom-row">
          <ul className="list-group list-group-horizontal">
            <li className="bullet">{props.postedAt}</li>
            <span className="dot" />
            <li className="bullet">{props.contract}</li>
            <span className="dot" />
            <li className="bullet">{props.location}</li>
          </ul>
        </div>
      </div>
      <div className="col-md-6 align-self-center skills-section">
        <div className="skills">
          <ul className="list-group list-group-horizontal flex-wrap skills-list">
            {skills.map ((skill, index) => (
              <li key={index} className="skill-bullet">
                <span className="skill-text">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JobBoard;
