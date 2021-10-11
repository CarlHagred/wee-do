import styled, { css } from "styled-components";
import Icon from "../Icon";

const StyledButton = styled.button.attrs()`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.palette.brand};

  color: white;

  font-size: ${(p) => (p.size === "lg" ? "2" : "1")}em;
  font-weight: bold;

  width: 100%;
  margin: 1em 0;
  padding: 0.5em 1em;

  border: none;
  border-radius: 2em;

  cursor: pointer;

  ${(p) =>
    p.disabled
      ? css`
          cursor: not-allowed;
          border: none;
          background: #ccc;
          color: white;
        `
      : p.outlined
      ? css`
          border: 1px solid black;
          background: none;
          color: #707070;
        `
      : css`
          &:hover {
            background: ${(props) => props.theme.palette.hoover};
          }
        `}
`;

const Button = (props) => (
  <StyledButton size={props.size} {...props}>
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
