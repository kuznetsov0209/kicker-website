import styled from "@emotion/styled";
import LogotypeIcon from "/src/components/Icons/LogotypeIcon";
import Button from "/src/components/Button";
import TournamentsIcon from "/src/components/Icons/TournamentsIcon";
import LeadersIcon from "/src/components/Icons/LeadersIcon";
import GamesIcon from "/src/components/Icons/GamesIcon";
import { Link } from "react-router-dom";

export const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  font-family: "Gotham";
  background-color: #262525;
  display: flex;
  align-items: center;
  height: 80px;
`;

export const MainLink = styled(Link)`
  height: 57%;
`;

export const RoutingList = styled.div`
  opacity: 0.9;
  color: #8482e8;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  right: 50%;
`;

export const UserInfo = styled.div`
  color: #ffffff;
  margin-right: 16px;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const UserInfoButton = styled(Button)`
  height: 28px;
  display: inline;
  margin-right: 16px;
`;

// .withComponent(Link);

export const LoginLink = styled(Button)`
  height: 28px;
  display: inline;
`.withComponent("a");

export const HeaderButton = styled.div`
  width: 140px;
  display: inline-block;
  font-size: 12px;
  text-align: center;
  color: ${props => (props.isActive ? "#ED4159" : "#888b92")};
  font-weight: bold;
`;

export const StyledLogotypeIcon = styled(LogotypeIcon)`
  margin-left: 16px;
  height: 100%;
`;

export const StyledTournamentsIcon = styled(TournamentsIcon)`
  margin-left: 55px;
  margin-right: 55px;
`;

export const StyledLeadersIcon = styled(LeadersIcon)`
  margin-left: 55px;
  margin-right: 55px;
`;

export const StyledGamesIcon = styled(GamesIcon)`
  margin-left: 55px;
  margin-right: 55px;
`;
