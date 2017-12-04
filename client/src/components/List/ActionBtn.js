import React from "react";

export const ActionBtn = props => {
  let cl = "btn btn-xs";
  switch (props.heading) {
  	case "Save": cl += " pull-right btn-info"; break;
    case "Remove": cl += " pull-right btn-danger"; break;
  	case "Update": cl += " btn-warning"; break;
  	default: cl += " btn-primary"; break;
  } 
  return (
    <button className={cl}
      {...props}>
      {props.heading}
    </button>
  )
};
