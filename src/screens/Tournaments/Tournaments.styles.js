import styled from "@emotion/styled";
import Button from "/src/components/Button";

export const Title = styled.h1`
  color: #ed4159;
  font-family: Gotham-Ultra;
  font-size: 102px;
  text-transform: uppercase;
`;

export const TitleMiddle = styled.h1`
  color: #ed4159;
  font-family: Gotham;
  font-style: normal;
  font-weight: bold;
  font-size: 62px;
  line-height: 74px;
  letter-spacing: -0.5px;
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

export const FutureTournaments = styled.div`
  background-color: #262525;
  border-radius: 4px;
  padding: 104px 46px 0px 6px;
  margin-bottom: 120px;
`;

export const FutureTournamentsTitle = styled(Title)`
  margin-left: 40px;
  margin-top: 22px;
  margin-bottom: 9px;
`;

export const FutureTournamentsSubTitle = styled(SubTitle)`
  margin: 8px 0px 5px 40px;
`;

export const FutureTournamentsButton = styled(Button)`
  margin: 55px 0px 55px 40px;
  min-width: 260px;
  box-shadow: none;
`;

export const FutureTournamentsMessageContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: 55px;
  margin-right: 40px;
  margin-bottom: 55px;
  margin-left: 40px;
  position: relative;
  top: -12px;
`;

export const FutureTournamentsTimerContainer = styled.div`
  display: flex;
  margin-top: 6px;
`;

export const FutureTournamentsText = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  margin-left: 6px;
`;

export const TournamentsHistory = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 120px;
  text-align: center;
  justify-content: space-between;
`;

export const TournamentHistoryTitle = styled(TitleMiddle)`
  margin-bottom: 43px;
  text-align: left;
  width: 100%;
`;

export const TournamentHistoryItem = styled.div`
  background-color: #262525;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  margin-bottom: 69px;
  min-width: 560px;
  height: 160px;
`;

export const TournamentHistoryItemTitle = styled(Title)`
  color: #ffffff;
  font-size: 32px;
  font-family: Gotham;
  margin: 13px 0px 0px 29px;
  font-weight: bold;
  line-height: 38px;
  letter-spacing: 0.6px;
`;

export const TournamentHistoryItemSubtitle = styled(SubTitle)`
  font-size: 12px;
  opacity: 0.7;
  margin: 31px 0px 0px 32px;
`;

export const WinnerItem = styled.div`
  background-color: #333030;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  min-width: 496px;
  min-height: 72px;
  position: relative;
  top: 25px;
`;

export const TeamInfo = styled.div`
  margin: 19px 16px 16px 0px;
`;

export const Team = styled.div`
  display: flex;
`;

export const TeamName = styled.div`
  color: #ffffff;
  font-family: Gotham;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  text-transform: uppercase;
  text-align: left;
`;

export const TeamPlayers = styled.div`
  opacity: 0.7;
  font-family: Gotham;
  font-size: 12px;
  font-weight: normal;
  line-height: 14px;
  color: #ffffff;
  mix-blend-mode: normal;
`;

export const CupContainer = styled.div`
  margin: 6px 14px 14px 16px;
`;

export const Main = styled.div`
  margin-bottom: 80px;
  margin-top: 50px;
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
