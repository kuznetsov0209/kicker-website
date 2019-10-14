import React from "react";
import SvgIcon from "../SvgIcon";

const HistoryIcon = props => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props}>
      <defs>
        <path
          id="a"
          d="M12 3V1l4 3-4 3V5a7 7 0 1 0 7 7h2a9 9 0 1 1-9-9zm1 8h2v2h-4V8h2v3z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#FFF" fillRule="nonzero" xlinkHref="#a" />
        <g fill="#FF" fillRule="nonzero" mask="url(#b)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </SvgIcon>
  );
};
export default HistoryIcon;
