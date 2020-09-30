import React from "react";

const Job = (props) => {
  return (
    <div>
      <img src={props.job.logo} alt="img" />
      <h6>{props.job.company}</h6>
      <h3>{props.job.position}</h3>
      <ul>
        <li>{props.job.postedAt}</li>
        <li>{props.job.contract}</li>
        <li>{props.job.location}</li>
      </ul>
      <ul>
        <li>Frontend</li>
        <li>Senior</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </div>
  );
};

export default Job;
