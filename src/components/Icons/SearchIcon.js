import React from "react";
import SvgIcon from "../SvgIcon";

const SearchIcon = props => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props}>
      <defs>
        <path
          id="a"
          d="M10.728 16.728a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-1 1.938a8.001 8.001 0 0 1 1-15.938 8 8 0 0 1 1 15.938v4.062h-2v-4.062z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use
          fill="#fff"
          fillRule="nonzero"
          transform="rotate(45 10.728 12.728)"
          xlinkHref="#a"
        />
      </g>
    </SvgIcon>
  );
};

export default SearchIcon;
