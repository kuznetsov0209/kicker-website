import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Tournaments from "/src/screens/Tournaments";
import AppContext from "/src/context/app";
import * as api from "/src/services/api";

import Header from "./Header";
import { Main } from "./App.styles.js";

class App extends Component {
  state = {};

  loadTournamentData = async id => {
    const [tournament, users] = await Promise.all([
      api.fetchTournament(id),
      api.fetchUsers()
    ]);
    this.setState({ tournament, users });

    if (tournament) {
      const tournamentGames = await api.fetchTournamentGames({
        tournamentId: tournament.id
      });
      const { stats, usersStats } = await api.fetchTournamentStats({
        tournamentId: tournament.id
      });
      this.setState({
        tournamentGames,
        tournamentStats: stats,
        tournamentUserStats: usersStats
      });
    }

    try {
      const user = await api.fetchUser();
      this.setState({ user });

      if (user && tournament) {
        const team = await api.fetchTeam({ tournamentId: tournament.id });
        this.setState({ team });
      }
    } catch {}
  };

  loadTournamentsData = async () => {
    const tournaments = await api.fetchTournaments();
    if (tournaments) {
      const date = new Date();

      const futureTournaments = tournaments.filter(tournament => {
        return (
          Date.parse(tournament.startDate) >= Date.parse(date) && tournament
        );
      });
      futureTournaments.sort((a, b) => {
        return Date.parse(a.startDate) - Date.parse(b.startDate);
      });

      const tournamentsHistory = tournaments.filter(tournament => {
        return (
          Date.parse(tournament.startDate) < Date.parse(date) && tournament
        );
      });
      tournamentsHistory.sort((a, b) => {
        return Date.parse(a.startDate) + Date.parse(b.startDate);
      });
      for (let i = 0; i < tournamentsHistory.length; i++) {
        const { stats, usersStats } = await api.fetchTournamentStats({
          tournamentId: tournamentsHistory[i].id
        });
        if (stats) {
          stats.sort((a, b) => b.wins - a.wins || b.goals - a.goals);
        }
        tournamentsHistory[i].stats = stats;
      }
      this.setState({ futureTournaments, tournamentsHistory });

      try {
        const user = await api.fetchUser();
        this.setState({ user });
      } catch {}
    }
  };

  unregisterTeam = async () => {
    const { tournament, team } = this.state;

    await api.unregisterTeam({
      tournamentId: tournament.id,
      teamId: team.id
    });

    this.setState({ team: undefined });
  };

  registerTeam = async ({ player2Id, name }) => {
    const { tournament } = this.state;

    const data = await api.createTeam({ player2Id, name });
    await api.registerTeam({
      tournamentId: tournament.id,
      teamId: data.team.id
    });

    this.setState({ team: data.team });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          registerTeam: this.registerTeam,
          unregisterTeam: this.unregisterTeam,
          loadTournamentData: this.loadTournamentData,
          loadTournamentsData: this.loadTournamentsData
        }}
      >
        <Router>
          <>
            <Header />
            <Main>
              <Switch>
                <Route exact path="/" component={Tournaments} />
                <Route exact path="/tournaments/" component={Tournaments} />
              </Switch>
            </Main>
          </>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
