import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Button from "/src/components/Button";

export const Input = styled.input`
  height: 40px;
  padding: 0 14px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  border: solid 1px #272727;
  background-color: #000000;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  margin-top: 3px;
`;

export const Title = styled.label`
  opacity: 0.7;
  font-family: Gotham;
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
`;

export const PlayerTitle = styled(Title)`
  border-bottom: 1px dashed;
`;

export const Photo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
  background-color: #000000;
  overflow: hidden;

  ${props =>
    props.empty &&
    css`
      border: 1px solid #272727;
      color: rgba(255, 255, 255, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Gotham;
    `}
`;

export const PhotoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Player = styled.button`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 0;
  background: none;
  border: none;
  -webkit-appearance: none;
`;

export const SubmitButton = styled(Button)`
  margin-top: 40px;
`;
