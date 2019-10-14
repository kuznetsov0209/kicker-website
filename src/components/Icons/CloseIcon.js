import React from "react";
import SvgIcon from "../SvgIcon";

const CloseIcon = props => {
  return (
    <SvgIcon width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        fill="#FF234A"
        fillRule="nonzero"
        d="M11.414 10l4.243 4.243a1 1 0 0 1-1.414 1.414L10 11.414l-4.243 4.243a1 1 0 0 1-1.414-1.414L8.586 10 4.343 5.757a1 1 0 0 1 1.414-1.414L10 8.586l4.243-4.243a1 1 0 0 1 1.414 1.414L11.414 10z"
      />
    </SvgIcon>
  );
};

export default CloseIcon;
