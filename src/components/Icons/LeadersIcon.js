import React from "react";
import SvgIcon from "../SvgIcon";

const LeadersIcon = props => {
  const { isActive, ...otherProps } = props;
  return (
    <SvgIcon width="32" height="32" viewBox="0 0 32 32" {...otherProps}>
      <path
        fill={isActive ? "#ED4159" : "#888B92"}
        fillRule="nonzero"
        d="M16.5 22.95l-7.935 4.472 1.801-8.929-6.705-6.165 9.048-1.046L16.5 3l3.791 8.282 9.048 1.046-6.705 6.165 1.801 8.929z"
      />
    </SvgIcon>
  );
};

export default LeadersIcon;
