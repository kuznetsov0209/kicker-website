import React from "react";
import { Paragraph, MatchHistory } from "./Tournaments.styles";
import Label from "/src/components/Label";
import { withAppContext } from "/src/context/app";
import MatchItem from "/src/components/MatchItem/MatchItem";

export default withAppContext(
  class TournamentGames extends React.Component {
    render() {
      const { tournamentGames } = this.props;
      return (
        <Paragraph>
          <Label>Матчи</Label>
          <MatchHistory>
            {tournamentGames &&
              tournamentGames
                .filter(item => item.game)
                .sort(
                  (a, b) =>
                    new Date(b.game.createdAt).getTime() -
                    new Date(a.game.createdAt).getTime()
                )
                .map((item, index) => <MatchItem key={index} data={item} />)}
          </MatchHistory>
        </Paragraph>
      );
    }
  }
);
