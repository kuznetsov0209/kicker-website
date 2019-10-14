import React from "react";
import { Paragraph, TeamName, TeamPlayers } from "./Tournaments.styles";
import Label from "/src/components/Label";
import { withAppContext } from "/src/context/app";
import Table from "/src/components/Table";
import TeamPhoto from "/src/components/TeamPhoto";

export default withAppContext(
  class TournamentRegisteredTeams extends React.Component {
    render() {
      const { tournamentStats } = this.props;
      return (
        <Paragraph>
          <Label>Команды</Label>
          <Table
            columns={[
              {
                label: "Team",
                style: { display: "flex" },
                render(team, index) {
                  return <TeamPhoto team={team} style={{ marginLeft: 10 }} />;
                }
              },
              {
                label: "",
                style: { flex: 1, minWidth: 120 },
                render(team, index) {
                  return (
                    <>
                      <TeamName>{team.name}</TeamName>
                      <TeamPlayers>
                        {[team.player1.name, team.player2.name].join(", ")}
                      </TeamPlayers>
                    </>
                  );
                }
              }
            ]}
            data={(tournamentStats || []).map(item => item.team)}
          />
        </Paragraph>
      );
    }
  }
);
