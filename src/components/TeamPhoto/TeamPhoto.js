import React from "react";
import RoundPhoto from "/src/components/RoundPhoto";
import styled from "@emotion/styled";

const Place = styled.div`
  position: absolute;
  top: 0px;
  left: -9px;
  width: 18px;
  height: 18px;
  border-radius: 15px;
  font-size: 11px;
  text-align: center;
  color: #ffffff;
  border: solid 1px #ed4159;
  background-image: linear-gradient(
    to bottom,
    rgba(237, 65, 89, 0.55),
    rgba(237, 65, 89, 0.8)
  );
  z-index: 3;
`;

const RoundPhotoForward = styled(RoundPhoto)`
  margin-left: -7px;
  z-index: 1;
`;

const RoundPhotoDefender = styled(RoundPhoto)`
  margin-right: -7px;
  z-index: 2;
`;

const PlaceText = styled.label`
  position: relative;
  top: 4px;
`;

const TeamPhotoBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const TeamPhoto = props => {
  const { position, team, ...otherProps } = props;

  return (
    <TeamPhotoBox {...otherProps}>
      {position ? (
        <Place>
          <PlaceText>{position}</PlaceText>
        </Place>
      ) : null}
      <RoundPhotoDefender src={team && team.player1.photoUrl} />
      <RoundPhotoForward src={team && team.player2.photoUrl} />
    </TeamPhotoBox>
  );
};

export default TeamPhoto;
