import React from "react";
import styled from "@emotion/styled";
import TeamPhoto from "/src/components/TeamPhoto";

const Case = styled.div`
  position: relative;
  width: 100%;
  min-height: 80px;
  border-radius: 4px;
  background-color: #262525;
  margin-bottom: 6px;
  display: grid;
  grid-template-columns: 1fr 20px 1fr;
  align-items: center;
  color: #ffffff;
  overflow: hidden;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const GradientLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 50%;
  opacity: 0.4;
  background-image: linear-gradient(
    to right,
    #ff234a,
    rgba(237, 65, 228, 0) 98%
  );

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
const GradientRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  opacity: 0.4;
  background-image: linear-gradient(
    to left,
    #ff234a,
    rgba(237, 65, 228, 0) 98%
  );

  @media screen and (max-width: 767px) {
    width: 100%;
    left: 0;
    right: auto;
    background-image: linear-gradient(
      to right,
      #ff234a,
      rgba(237, 65, 228, 0) 98%
    );
  }
`;

const Colon = styled.span`
  font-family: Gotham;
  font-size: 22px;
  font-weight: 900;
  text-align: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Left = styled.div`
  position: relative;
  align-items: center;
  display: grid;
  grid-template-columns: 90px 1fr 40px;
  padding: 5px;
  height: 100%;
  box-sizing: border-box;
`;

const Right = styled.div`
  position: relative;
  align-items: center;
  display: grid;
  grid-template-columns: 40px 1fr 90px;
  padding: 5px;
  height: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    grid-template-columns: 90px 1fr 40px;
  }
`;

const Team = styled.div`
  z-index: 1;
  overflow: hidden;
`;

const TeamRight = styled(Team)`
  text-align: right;
  @media screen and (max-width: 767px) {
    text-align: left;
    grid-row-start: 1;
    grid-column-start: 2;
  }
`;

const Score = styled.span`
  text-align: right;
  font-family: Gotham;
  font-size: 22px;
  font-weight: 900;
`;

const ScoreRight = styled(Score)`
  text-align: left;

  @media screen and (max-width: 767px) {
    grid-row-start: 1;
    grid-column-start: 3;
    text-align: right;
  }
`;

const TeamPhotoRight = styled(TeamPhoto)`
  @media screen and (max-width: 767px) {
    grid-column-start: 1;
    grid-row-start: 1;
  }
`;

const TeamName = styled.div`
  font-family: Gotham;
  font-size: 16px;
  font-weight: bold;
`;

const Members = styled.div`
  opacity: 0.7;
  font-family: Gotham;
  font-size: 12px;
  line-height: 15px;
  margin-top: 1px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const TeamContainer = styled.div``;

const MatchItem = props => {
  const { data, ...otherProps } = props;
  const teamLeft = data.game ? data.teamRed : data.team1;
  const teamRight = data.game ? data.teamBlue : data.team2;

  return (
    <Case {...otherProps}>
      <Left>
        {data.game && data.goalsRed > data.goalsBlue && <GradientLeft />}
        <TeamPhoto team={teamLeft} />
        <Team>
          <TeamContainer>
            <TeamName>{teamLeft.name}</TeamName>
            <Members>
              {teamLeft.player1.name}, {teamLeft.player2.name}
            </Members>
          </TeamContainer>
        </Team>
        <Score>{data.game ? data.goalsRed : "-"}</Score>
      </Left>
      <Colon>:</Colon>
      <Right>
        {data.game && data.goalsBlue > data.goalsRed && <GradientRight />}
        <ScoreRight>{data.game ? data.goalsBlue : "-"}</ScoreRight>
        <TeamRight>
          <TeamContainer>
            <TeamName>{teamRight.name}</TeamName>
            <Members>
              {teamRight.player1.name}, {teamRight.player2.name}
            </Members>
          </TeamContainer>
        </TeamRight>
        <TeamPhotoRight team={teamRight} />
      </Right>
    </Case>
  );
};

export default MatchItem;
