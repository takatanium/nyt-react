import React from "react";

export const ItemTitle = props =>
  <a href={props.href} target="_blank">
    {props.title}
  </a>;
