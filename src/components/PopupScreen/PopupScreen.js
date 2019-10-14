import React from "react";
import styled from "@emotion/styled";
import CloseIcon from "/src/components/Icons/CloseIcon";

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: calc(100% - 32px);
  max-width: 580px;
  border-radius: 8px;
  background-color: #191919;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  position: relative;
`;

const Title = styled.h2`
  font-family: Gotham;
  font-size: 21px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 24px;
  margin-bottom: 24px;
  padding: 0 24px;
`;

const CloseButton = styled.button`
  padding: 24px;
  background-color: transparent;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 9;
`;

const PopupBody = styled.div`
  max-height: 60vh;
  overflow: auto;
  padding: 0 24px;
  -webkit-overflow-scrolling: touch;
`;

const PopupScreen = ({ children, title, closePopup, ...props }) => {
  return (
    <Popup {...props}>
      <Container>
        <Title>{title}</Title>
        <CloseButton onClick={closePopup}>
          <CloseIcon />
        </CloseButton>
        <PopupBody>{children}</PopupBody>
      </Container>
    </Popup>
  );
};

export default PopupScreen;
