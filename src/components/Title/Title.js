import React from "react";

import "./Title.scss";

const Title = ({ title }) => {
  return (
    <div className="title">
      <h4>{title}</h4>
      <div></div>
    </div>
  );
};

export default Title;
