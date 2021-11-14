import styled, { css } from "styled-components";

import Icon from "./Icons";

const ButtonContainer = styled.div`
    max-width: 300px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: auto;
`;

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

    width: 100%;
    padding: 0.3em 1em;

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
            : props.neutral
            ? css`
                  background: #8a8883;
                  &:hover {
                      background: #4a4946;
                  }
              `
            : css`
                  &:hover {
                      background: ${(props) => props.theme.palette.hover};
                  }
              `}
`;

const Button = (props) => (
    <ButtonContainer>
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
    </ButtonContainer>
);

export default Button;
