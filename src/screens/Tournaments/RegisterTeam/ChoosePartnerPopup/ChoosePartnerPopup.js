import React from "react";
import PopupScreen from "/src/components/PopupScreen";
// import SearchIcon from "/src/components/Icons/SearchIcon";
import { withAppContext } from "/src/context/app";

import { Content, UsersList, User, UserPhoto } from "./ChoosePartnerPopup.styles";

export default withAppContext(
  class ChoosePartner extends React.Component {
    render() {
      const { users, user, closePopup, onChange } = this.props;

      return (
        <PopupScreen title="Выберите своего напарника" closePopup={closePopup}>
          <Content>
            {/* <SearchCase>
              <SearchInput placeholder="Поиск" />
              <SearchButton>
                <SearchIcon />
              </SearchButton>
            </SearchCase> */}

            <UsersList>
              {users
                .filter(item => item.id !== user.id)
                .map(item => (
                  <User key={item.id} onClick={() => onChange(item)}>
                    <UserPhoto src={item.photoUrl} />
                    {item.name}
                  </User>
                ))}
            </UsersList>
          </Content>
        </PopupScreen>
      );
    }
  }
);
