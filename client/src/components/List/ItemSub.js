import React from "react";

export const ItemSub = props =>
  <div className="small">
    {props.heading}{Date(props.mid).slice(0,15)}
  </div>;
