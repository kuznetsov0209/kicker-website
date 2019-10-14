import React from "react";
import SvgIcon from "../SvgIcon";

const GamesIcon = props => {
  const { isActive, ...otherProps } = props;
  return (
    <SvgIcon width="32" height="32" viewBox="0 0 32 32" {...otherProps}>
      <path
        fill={isActive ? "#ED4159" : "#888B92"}
        fillRule="nonzero"
        d="M16.7 3.042c-4.9 0-9.24 2.691-11.48 6.8L2 6.583v9.209h9.1l-3.92-3.967C9 8.283 12.5 5.875 16.7 5.875c5.74 0 10.5 4.817 10.5 10.625s-4.76 10.625-10.5 10.625c-4.62 0-8.4-2.975-9.94-7.083H3.82c1.54 5.666 6.72 9.916 12.88 9.916 7.42 0 13.3-6.091 13.3-13.458S23.98 3.042 16.7 3.042zm-2.1 7.083v7.225l6.58 3.967 1.12-1.842-5.6-3.4v-5.95h-2.1z"
        opacity=".9"
      />
    </SvgIcon>
  );
};

export default GamesIcon;
