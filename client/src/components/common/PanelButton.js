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
    <StyledPanelButton to={props.children} {...props}>
        {props.icon && (
            <StyledPanelIcon
                name={props.icon}
                fill="white"
                width="64"
                height="64"
                size="64"
            />
        )}
        <StyledPanelText>{props.children}</StyledPanelText>
    </StyledPanelButton>
);

export default PanelButton;
