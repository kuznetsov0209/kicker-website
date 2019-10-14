import styled from "@emotion/styled";
import Button from "/src/components/Button";

export const TournamentsHistory = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 120px;
  text-align: center;
`;

export const Main = styled.div`
  margin-bottom: 80px;
  margin-top: 50px;
`;

export const Title = styled.h1`
  margin-top: 9px;
  color: #ed4159;
  display: block;
  font-family: Gotham-Ultra;
  font-size: 106px;
`;

export const SubTitle = styled.h2`
  color: #ffffff;
  font-size: 48px;
`;

export const GrayText = styled.span`
  opacity: 0.7;
  font-size: 16px;
  grid-column: 2;
  grid-row: 1;
  color: #ffffff;
`;

export const Text = styled.span`
  color: #ffffff;
  line-height: 1.63;
`;

export const RegistrationCase = styled.div`
  display: flex;
  margin-top: 63px;
`;

export const Link = Button.withComponent("a");

export const Steps = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
`;

export const Step = styled.div`
  flex: 1;
  display: flex;
  flex-shrink: 0;
  margin-bottom: 32px;
  padding-right: 5px;

  @media screen and (max-width: 560px) {
    align-items: center;
  }
`;

export const StepText = styled(Text)`
  line-height: normal;
  display: block;
  margin-bottom: 5px;
`;

export const StepNumber = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 2px solid #ed4159;
  margin-right: 13px;
  text-align: center;
  color: #ffffff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeaderboardImage = styled.img`
  float: left;
  padding-right: 20px;
  padding-bottom: 20px;
  max-width: 100%;
`;

export const RulesImage = styled.img`
  max-width: 100%;
  padding-bottom: 20px;
`;

export const Footer = styled.div`
  margin-bottom: 50px;
  margin-top: 50px;
  text-align: center;
`;

export const Paragraph = styled.p`
  overflow: hidden;
`;

export const TournamentRatings = styled.div`
  overflow: auto;
  width: 100%;
`;

export const MatchHistory = styled.div`
  overflow: auto;
  width: 100%;
`;

export const Team = styled.div`
  display: flex;
`;

export const TeamName = styled.div`
  font-family: Gotham;
  font-size: 16px;
  font-weight: bold;
`;

export const TeamPlayers = styled.div`
  opacity: 0.7;
  font-family: Gotham;
  font-size: 12px;
  line-height: 15px;
  margin-top: 1px;
`;
