import React from "react";
import { Paragraph } from "./Tournaments.styles";
import Label from "/src/components/Label";
import { withAppContext } from "/src/context/app";

import Table from "/src/components/Table";
import PlayerPhoto from "/src/components/PlayerPhoto";

export default withAppContext(
  class TournamentUserStats extends React.Component {
    render() {
      const { tournamentUserStats } = this.props;

      if (!tournamentUserStats) {
        return null;
      }

      const standings = (tournamentUserStats.all || []).sort(
        (a, b) => b.rating - a.rating
      );

      const columns = [
        {
          id: "user.photo",
          label: "Player",
          name: "name",
          style: { width: 50 },
          render(value, index) {
            return (
              <PlayerPhoto
                position={index + 1}
                player={{ photoUrl: value.photoUrl }}
                style={{ marginLeft: 10 }}
              />
            );
          }
        },
        {
          id: "user.name",
          label: "",
          name: "name",
          style: { flex: 1 }
        },
        {
          id: "user.games",
          label: "Games",
          name: "games",
          style: { width: 60, textAlign: "center" }
        },
        {
          id: "user.wins%",
          label: "Wins %",
          name: "wins",
          style: { width: 60, textAlign: "center" },
          render(value, index) {
            return `${((value.wins / value.games) * 100).toFixed(0)}%`;
          }
        },
        {
          id: "user.goals",
          label: "Goals avg.",
          name: "goals",
          style: { width: 60, textAlign: "center" },
          render(value, index) {
            return `${(value.goals / value.games).toFixed(1)}`;
          }
        },
        {
          id: "user.keep",
          label: "Keeps avg.",
          name: "keep",
          style: { width: 60, textAlign: "center" },
          render(value, index) {
            return `${(value.keep / value.games).toFixed(1)}`;
          }
        },
        {
          id: "user.rating",
          label: "Rating",
          name: "rating",
          style: { width: 60, textAlign: "center", color: "#ed4159" }
        }
      ];

      const visibleColumnsIds = (() => {
        if (window.screen.width < 375)
          return ["user.photo", "user.name", "user.rating"];
        if (window.screen.width < 767)
          return ["user.photo", "user.name", "user.rating"];
        return [
          "user.photo",
          "user.name",
          "user.games",
          "user.wins%",
          "user.goals",
          "user.keep",
          "user.rating"
        ];
      })();

      return (
        <Paragraph>
          <Label>Рейтинг игроков</Label>
          <Table
            columns={columns.filter(column =>
              visibleColumnsIds.includes(column.id)
            )}
            data={standings}
          />
        </Paragraph>
      );
    }
  }
);
