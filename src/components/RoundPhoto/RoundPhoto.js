import React from "react";
import styled from "@emotion/styled";

const Photo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #f0f0f0;
`;
const RoundPhoto = props => <Photo {...props} />;
export default RoundPhoto;
