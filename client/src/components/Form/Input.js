import React from "react";

export const Input = props =>
  <div className="form-group">
    <h4 className="text-center">{props.heading}</h4>
    <input className="form-control" {...props} />
  </div>;
