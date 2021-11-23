import React from "react";
import ReactPlayer from "react-player";
import Styled from "styled-components"; 


const Player = (url, className) => {
    <ReactPlayer 
        url={url}
        className={className}
        playing
        width="100%"
        height="100%"
        controls={false}
        muted
    />
};

const AbsolutelyPositionedPlayer = Styled(Player)`
    position: absolute;
    top: 0;
    left: 0;
`;
const RelativePositionWrapper = Styled.div`
  position: relative;
  padding-top: 56.25%;
`;
const ResponsivePlayer = () => {
    return (
        <RelativePositionWrapper>
            <AbsolutelyPositionedPlayer />
        </RelativePositionWrapper>
    );
}
export default ResponsivePlayer;

