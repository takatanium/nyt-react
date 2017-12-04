import React from "react";

const Panel = ({ heading, children }) =>
  <div className="panel panel-primary">
    <div className="panel-heading text-center">
      <h1>{heading}</h1>
    </div>
    <div className="panel-body" style={{maxHeight: "500px", overflowY: "auto"}}>
      {children}
    </div>
  </div>;

export default Panel;