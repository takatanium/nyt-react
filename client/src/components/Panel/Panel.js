import React from "react";

export const Panel = ({ heading, children }) =>
  <div className="panel panel-primary">
    <div className="panel-heading text-center">
      <h1>{heading}</h1>
    </div>
    <div className="panel-body">{children}</div>
  </div>;
