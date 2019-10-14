import React from "react";
import { withAppContext } from "/src/context/app";
import { Text, LeaveButton } from "./RegisteredTeam.styles";

/* global confirm */

class RegisteredTeam extends React.Component {
  leave = () => {
    const { unregisterTeam } = this.props;
    if (confirm("Снять команду с турнира?")) {
      unregisterTeam();
    }
  };

  render() {
    const { team } = this.props;

    return (
      <>
        <Text>
          Команда {team.name} готова! <br /> Ждём остальных
        </Text>

        <LeaveButton
          color="primary"
          variant="contained"
          size="large"
          onClick={this.leave}
        >
          Снять команду с турнира
        </LeaveButton>
      </>
    );
  }
}

export default withAppContext(RegisteredTeam);
