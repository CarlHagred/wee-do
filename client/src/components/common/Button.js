import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;

  background: ${(props) => props.theme.palette.brand};

  color: white;

  font-size: ${(props) => (props.size === "lg" ? "2" : "1")}em;
  font-weight: bold;

  width: 100%;
  margin: 1em 0;
  padding: 0.5em 1em;

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
      : css`
          &:hover {
            background: ${(props) => props.theme.palette.hoover};
          }
        `}
`;

const Button = (props) => <StyledButton size={props.size} {...props} />;

export default Button;
