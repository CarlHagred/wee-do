import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../components/common/Icons";

const StyledPanelButton = styled(NavLink)`
    display: flex;
    flex-direction: column;
    min-height: 135px;
    min-width: 238px;
    background: ${(props) => props.theme.palette.brand};
    border-radius: 2em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    &:hover {
        background-color: ${(props) => props.theme.palette.hover};
    }
`;

const StyledPanelText = styled.p`
    align-self: flex-start;
    color: white;
    font-size: 1.3em;
    margin-left: 20px;
`;

const StyledPanelIcon = styled(Icon)`
    align-self: flex-end;
    color: white;
    margin: 20px 20px 10px 0;
`;

const PanelButton = (props) => (
    <StyledPanelButton
        to={props.children}
        size={props.size}
        width={props.width}
        height={props.height}
        {...props}
    >
        {props.icon && (
            <StyledPanelIcon
                name={props.icon}
                fill="white"
                width={props.width}
                height={props.height}
                size={props.size}
            />
        )}
        <StyledPanelText>{props.children}</StyledPanelText>
    </StyledPanelButton>
);

export default PanelButton;
