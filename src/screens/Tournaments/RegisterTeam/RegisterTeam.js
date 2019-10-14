import React from "react";
import { withAppContext } from "/src/context/app";
import ChoosePartnerPopup from "./ChoosePartnerPopup";
import {
  Input,
  Title,
  PlayerTitle,
  Photo,
  PhotoImg,
  Player,
  SubmitButton
} from "./RegisterTeam.styles";

class RegisterTeam extends React.Component {
  state = {
    teamName: "",
    partner: undefined,
    isPartnerPopupVisible: false
  };

  closePartnerPopup = () => {
    this.setState({
      isPartnerPopupVisible: false
    });
  };

  openPartnerPopup = () => {
    this.setState({
      isPartnerPopupVisible: true
    });
  };

  selectPartner = partner => {
    this.setState({
      partner,
      isPartnerPopupVisible: false
    });
  };

  handleChangeTeam = e => {
    this.setState({ teamName: e.target.value });
  };

  register = e => {
    e.preventDefault();

    const { teamName, partner } = this.state;
    const { registerTeam } = this.props;

    registerTeam({
      name: teamName,
      player2Id: partner.id
    });
  };

  render() {
    const { partner, teamName } = this.state;
    const { user } = this.props;

    return (
      <form onSubmit={this.register}>
        <div>
          <Title>Название команды</Title>
          <Input value={teamName} onChange={this.handleChangeTeam} />
        </div>

        <Player onClick={this.openPartnerPopup}>
          <Photo>{user && <PhotoImg src={user.photoUrl} />}</Photo>
          <Photo empty={!partner}>
            {partner ? <PhotoImg src={partner.photoUrl} /> : "?"}
          </Photo>
          {partner ? (
            <PlayerTitle>{partner.name}</PlayerTitle>
          ) : (
            <PlayerTitle>Выбери партнера</PlayerTitle>
          )}
        </Player>

        <SubmitButton
          color="primary"
          variant="contained"
          size="large"
          disabled={!user || !teamName || !partner}
        >
          Заявить команду
        </SubmitButton>

        {this.state.isPartnerPopupVisible && (
          <ChoosePartnerPopup
            onChange={this.selectPartner}
            closePopup={this.closePartnerPopup}
          />
        )}
      </form>
    );
  }
}

export default withAppContext(RegisterTeam);
