import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

const StyledReactPlayer = styled(ReactPlayer)`
  div {
    aspect-ratio: 16/9;
    max-width: 640px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    @media (min-width: 650px) {
      margin: 3em auto 0 auto;
    }
  }
`;
// *** React Player START ***
const ReactPlayerComponent = (playerProps) => {

  const playerVars = {
    youtube: {
      playerVars: { controls: 1, modestbranding: 1, rel: 0 },
    },
  };

  const { url, playing, onEnded } = playerProps;

  return (
      <StyledReactPlayer
        url={url}
        width="100%"
        height="100%"
        playing={playing}
        config={playerVars}
        onEnded={onEnded}
      />
  );
};
export default ReactPlayerComponent;
// *** React Player END ***
