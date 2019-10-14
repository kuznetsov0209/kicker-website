import React from "react";
import { Paragraph, TeamName, TeamPlayers } from "./Tournaments.styles";
import Label from "/src/components/Label";
import { withAppContext } from "/src/context/app";
import Table from "/src/components/Table";
import TeamPhoto from "/src/components/TeamPhoto";
import TeamProgress from "./TeamProgress";

export default withAppContext(
  class TournamentStats extends React.Component {
    render() {
      const { tournamentStats, tournamentGames } = this.props;

      if (!tournamentStats || !tournamentGames) {
        return null;
      }

      const standings = tournamentStats.sort(
        (a, b) => b.wins - a.wins || b.goals - a.goals
      );

      const columns = [
        {
          id: "team.photo",
          label: "Team",
          render(value, index) {
            return (
              <TeamPhoto
                position={index + 1}
                team={value.team}
                style={{ marginLeft: 10 }}
              />
            );
          }
        },
        {
          id: "team.name",
          label: "",
          style: { flex: 1, minWidth: 120 },
          render(value, index) {
            return (
              <>
                <TeamName>{value.team.name}</TeamName>
                <TeamPlayers>
                  {[value.team.player1.name, value.team.player2.name].join(
                    ", "
                  )}
                </TeamPlayers>
                <TeamProgress teamId={value.team.id} />
              </>
            );
          }
        },
        {
          id: "team.games",
          label: "Games",
          name: "games",
          style: { width: 60, textAlign: "center" }
        },
        {
          id: "team.wins",
          label: "Wins",
          name: "wins",
          style: { width: 60, textAlign: "center", color: "#ed4159" }
        },
        {
          id: "team.defeats",
          label: "Defeats",
          name: "defeats",
          style: { width: 60, textAlign: "center" }
        },
        {
          id: "team.goalsScored",
          label: "Goals scored",
          name: "goalsScored",
          style: { width: 60, textAlign: "center" }
        },
        {
          id: "team.goalsMissed",
          label: "Goals missed",
          name: "goalsMissed",
          style: { width: 60, textAlign: "center" }
        }
      ];

      return (
        <Paragraph>
          <Label>Рейтинг команд</Label>
          <Table columns={columns} data={standings} />
        </Paragraph>
      );
    }
  }
);
