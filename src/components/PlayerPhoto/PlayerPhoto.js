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
`;

const PlayerPhoto = props => {
  const { position, player, ...otherProps } = props;

  return (
    <TeamPhotoBox {...otherProps}>
      {position ? (
        <Place>
          <PlaceText>{position}</PlaceText>
        </Place>
      ) : null}
      <RoundPhotoDefender src={player && player.photoUrl} />
    </TeamPhotoBox>
  );
};

export default PlayerPhoto;
