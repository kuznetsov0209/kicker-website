import React from "react";
import { withAppContext } from "/src/context/app";

export default withAppContext(
  class TeamProgress extends React.Component {
    render() {
      const { tournamentGames, teamId } = this.props;

      if (!tournamentGames) {
        return null;
      }

      return (
        <div style={{ display: "flex", marginTop: 5 }}>
          {tournamentGames
            .filter(item => item.game)
            .filter(
              item => item.teamRed.id === teamId || item.teamBlue.id === teamId
            )
            .sort(
              (a, b) =>
                new Date(a.game.createdAt).getTime() -
                new Date(b.game.createdAt).getTime()
            )
            .map((item, index) => {
              let win;
              if (item.teamRed.id === teamId) {
                win = item.goalsRed > item.goalsBlue;
              }
              if (item.teamBlue.id === teamId) {
                win = item.goalsBlue > item.goalsRed;
              }
              return (
                <div
                  key={index}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    marginRight: 3,
                    backgroundColor: win ? "#2c652f" : "#e03f55"
                  }}
                />
              );
            })}
        </div>
      );
    }
  }
);
