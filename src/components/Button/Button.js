import styled from "@emotion/styled";
import { css } from "@emotion/core";

const colors = {
  primary: "#ed4159",
  secondary: "#fd526a",
  default: "#ffffff"
};

const variants = {
  outlined: `
    border-radius: 100px;
    border: 2px solid;
    background-color: transparent;
    box-shadow: none;
  `,
  contained: `
    border-radius: 100px;
  `
};

const sizes = {
  medium: css`
    padding: 6px 14px;
    font-family: Gotham, sans-serif;
    font-weight: 500;
    font-size: 14px;
  `,
  large: css`
    padding: 16px 32px;
    font-family: Gotham, sans-serif;
    font-weight: bold;
    font-size: 16px;
  `
};

const variantColors = {
  outlined: {
    primary: css`
      border-color: ${colors.primary};
      color: ${colors.default};

      &:not([disabled]):hover {
        background-color: ${colors.primary};
        color: ${colors.default};
        fill: ${colors.primary};
      }

      &:not([disabled]):active {
        background-color: ${colors.secondary};
        color: ${colors.default};
        fill: ${colors.primary};
      }
    `,
    secondary: css`
      color: ${colors.default};
      border-color: ${colors.secondary};
    `,
    default: css`
      color: ${colors.default};
      border-color: ${colors.default};
    `
  },
  contained: {
    primary: css`
      background-color: ${colors.primary};
      color: ${colors.default};
      fill: ${colors.secondary};
      box-shadow: 0 4px 16px 0 rgba(237, 65, 89, 0.4);

      &:not([disabled]):hover {
        box-shadow: 0 9px 20px 0 rgba(237, 65, 89, 0.5);
        background-color: ${colors.primary};
        color: ${colors.default};
        fill: ${colors.primary};
      }

      &:not([disabled]):active {
        box-shadow: 0 9px 20px 0 rgba(237, 65, 89, 0.5);
        background-color: ${colors.secondary};
        color: ${colors.default};
        fill: ${colors.primary};
      }
    `,
    secondary: css`
      background-color: ${colors.secondary};
      color: ${colors.default};
      fill: ${colors.primary};
      box-shadow: 0 4px 16px 0 rgba(29, 31, 38, 0.1);

      &:not([disabled]):hover {
        box-shadow: 0 9px 20px 0 rgba(237, 65, 89, 0.5);
        background-color: ${colors.primary};
        color: ${colors.default};
        fill: ${colors.secondary};
      }

      &:not([disabled]):active {
        background-color: transparent;
        color: ${colors.default};
        fill: ${colors.secondary};
      }
    `
  }
};

const disabled = css`
  opacity: 0.4;
`;

const ButtonBase = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
`;

const Button = styled(ButtonBase)`
  color: ${props => (props.color ? colors[props.color] : colors.default)};
  ${props => variants[props.variant]}
  ${props => props.variant && variantColors[props.variant][props.color]}
  ${props => (props.size ? sizes[props.size] : sizes.medium)}
  ${props => props.disabled && disabled}
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 100%;
`;

export default Button;
