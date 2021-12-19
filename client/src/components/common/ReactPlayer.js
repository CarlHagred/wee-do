import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

const StyledReactPlayer = styled(ReactPlayer)`
  aspect-ratio: 16/9;
  max-width: 850px;
  margin: 0 auto;
  @media (min-width: 851px) {
    margin: 3em auto 0 auto;
  }
  @supports not (aspect-ratio: 16/9) {
    iframe {
      min-height: 432px;
    }
  }
`;

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
