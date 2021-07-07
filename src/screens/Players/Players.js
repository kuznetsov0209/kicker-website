import React from "react";
import * as api from "/src/services/api";
import PlayersStats from "./PlayersStats";

import { withAppContext } from "/src/context/app";

class Players extends React.Component {
  state = {};

  loadPlayersStats = async () => {
    const playersStats = await api.fetchUsersStats();

    this.setState({
      playersStats
    });
  };

  componentDidMount() {
    this.loadPlayersStats();
  }

  render() {
    return (
      <>
        {this.state.playersStats && (
          <PlayersStats stats={this.state.playersStats} />
        )}
      </>
    );
  }
}

export default withAppContext(Players);
