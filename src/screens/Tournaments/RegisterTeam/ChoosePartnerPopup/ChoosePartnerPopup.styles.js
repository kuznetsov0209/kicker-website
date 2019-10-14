import styled from "@emotion/styled";
// import SearchIcon from "/src/components/Icons/SearchIcon";
import RoundPhoto from "/src/components/RoundPhoto";

// export const SearchInput = styled.input`
//   height: 16px;
//   padding: 14px;
//   width: 486px;
//   border-radius: 4px;
//   border: solid 1px #272727;
//   background-color: #000000;
//   color: #ffffff;
//   font-size: 14px;
//   font-weight: 500;
// `;

export const Content = styled.div`
  position: relative;
  display: block;
  color: #ffffff;
`;

// export const SearchButton = styled.button`
//   position: absolute;
//   bottom: 5px;
//   right: 0;
//   background-color: transparent;
//   border: none;
// `;

// export const SearchCase = styled.div`
//   width: 512px;
//   height: 44px;
//   position: relative;
//   margin-top: 73px;
//   margin-left: 34px;
//   margin-right: 34px;
// `;

export const UsersList = styled.div``;

export const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const UserPhoto = styled(RoundPhoto)`
  margin-right: 20px;
`;
