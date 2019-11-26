import React from "react";
import {
  StyledHeader,
  RoutingList,
  UserInfo,
  StyledLogotypeIcon,
  UserInfoButton,
  HeaderButton,
  StyledTournamentsIcon,
  StyledGamesIcon,
  StyledLeadersIcon,
  LoginLink,
  MainLink
} from "./Header.styles";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import RoundPhoto from "/src/components/RoundPhoto/RoundPhoto";
import { withAppContext } from "/src/context/app";
import { GOOGLE_AUTH_URL } from "/src/services/backend";

class Header extends React.Component {
  static renderIcon(to, isActive) {
    switch (to) {
      case "/games":
        return <StyledGamesIcon isActive={isActive} />;
      case "/players":
        return <StyledLeadersIcon isActive={isActive} />;
      case "/tournaments":
        return <StyledTournamentsIcon isActive={isActive} />;
      default:
        return null;
    }
  }

  menuLink({ label, to }) {
    return (
      <Route path={to}>
        {({ match }) => (
          <Link to={to}>
            <HeaderButton isActive={match}>
              {Header.renderIcon(to, match)}
              {label}
            </HeaderButton>
          </Link>
        )}
      </Route>
    );
  }

  render() {
    const { user, team } = this.props;
    return (
      <StyledHeader {...this.props}>
        <MainLink to="/">
          <StyledLogotypeIcon />
        </MainLink>

        <RoutingList>
          {this.menuLink({ label: "GAMES", to: "/games" })}
          {this.menuLink({ label: "PLAYERS", to: "/players" })}
          {this.menuLink({ label: "TOURNAMENTS", to: "/tournaments" })}
        </RoutingList>

        <UserInfo>
          {user ? (
            <>
              {team ? (
                <UserInfoButton
                  color="secondary"
                  variant="contained"
                  to="/team"
                >
                  {team.name}
                </UserInfoButton>
              ) : null}
              <RoundPhoto src={user.photoUrl} />
            </>
          ) : (
            <LoginLink href={GOOGLE_AUTH_URL}>Войти</LoginLink>
          )}
        </UserInfo>
      </StyledHeader>
    );
  }
}

export default withAppContext(Header);
