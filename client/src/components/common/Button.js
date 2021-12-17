import styled, { css } from "styled-components";

import Icon from "./Icons";

const StyledButton = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;

  background: ${(props) => props.theme.palette.brand};
  color: white;

  font-size: ${(props) => (props.size === "lg" ? "2" : "1.2")}em;
  font-weight: bold;

  margin-top: ${(props) => (props.size === "lg" ? "1" : "0")}em;
  margin-bottom: ${(props) => (props.size === "lg" ? "1" : "0")}em;
  padding: 0.6em 1.2em;

  width: ${(props) => (props.width === "wide" ? "100%" : "300px")};

  border-radius: 2em;

  cursor: pointer;

  ${(props) =>
    props.disabled
      ? css`
          cursor: not-allowed;
          border: none;
          background: #ccc;
          color: white;
        `
      : props.outlined
      ? css`
          border: 1px solid black;
          background: none;
          color: #707070;
        `
      : props.outlinedTheme
      ? css`
          border: 2px solid ${(props) => props.theme.palette.brand};
          background: none;
          color: ${(props) => props.theme.palette.brand};
          padding: 0.5em 1em;
          &:hover {
            border: 2px solid red;
            background: none;
            color: red;
          }
        `
      : props.disabledTooltip
      ? css`
          cursor: not-allowed;
          border: none;
          background: #ccc;
          color: white;
        `
      : css`
          &:hover {
            background: ${(props) => props.theme.palette.hover};
          }
        `}
`;

const Button = (props) => (
  <StyledButton size={props.size} width={props.width} {...props}>
    {props.icon && (
      <Icon
        height={props.size === "lg" ? 24 : 16}
        width={props.size === "lg" ? 24 : 16}
        name={props.icon}
      />
    )}
    {props.children}
  </StyledButton>
);

export default Button;
