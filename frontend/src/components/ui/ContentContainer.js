import React from "react";
//This container renders the labels such as "select a movie/seats/time" 
//and props.children will render the hardcoded movie details
const ContentContainer = (props) => {
  return (
    <div className="content-container">
      <div className="label">
        <p>{props.label}</p>
      </div>
      <div className="content-slots">{props.children}</div>
    </div>
  );
};

export default ContentContainer;
