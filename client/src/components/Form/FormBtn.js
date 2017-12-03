import React from "react";

export const FormBtn = props =>
  <button {...props} className="btn btn-lg btn-success center-block">
    {props.children}
  </button>;
