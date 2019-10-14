import React from "react";

const AppContext = React.createContext({});

export default AppContext;

export const withAppContext = TargetComponent => props => (
  <AppContext.Consumer>
    {context => {
      return <TargetComponent {...context} {...props} />;
    }}
  </AppContext.Consumer>
);
