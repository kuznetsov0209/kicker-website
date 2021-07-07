import React from "react";
import Label from "/src/components/Label";
import { withAppContext } from "/src/context/app";

import Table from "/src/components/Table";
import PlayerPhoto from "/src/components/PlayerPhoto";
import RoundPhoto from "/src/components/RoundPhoto";

export default withAppContext(
  class PlayersStats extends React.Component {
    render() {
      const stats = this.props.stats;

      if (!stats) {
        return null;
      }

      const standings = (stats || []).sort((a, b) => b.rating - a.rating);

      const columns = [
        {
          id: "user.photo",
          label: "Игрок",
          name: "name",
          style: { width: 50 },
          render(value, index) {
            return (
              <RoundPhoto src={value.photoUrl} style={{ marginLeft: 10 }} />
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
          label: "Матчи",
          name: "games",
          style: { width: 132, textAlign: "center" }
        },
        {
          id: "user.wins",
          label: "Выигрыши",
          name: "wins",
          style: { width: 132, textAlign: "center" }
        },
        {
          id: "user.defeats",
          label: "Поражения",
          name: "defeats",
          style: { width: 132, textAlign: "center" }
        },
        {
          id: "user.rating",
          label: "Рейтинг",
          name: "rating",
          style: { width: 132, textAlign: "center", color: "#ed4159" }
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
          "user.wins",
          "user.defeats",
          "user.rating"
        ];
      })();

      return (
        <>
          <Label>Рейтинг игроков</Label>
          <Table
            columns={columns.filter(column =>
              visibleColumnsIds.includes(column.id)
            )}
            data={standings}
          />
        </>
      );
    }
  }
);
