import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getSession, getMyVideos } from "../../api/index";
import PatientLayout from "../../components/patient/PatientLayout";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  flex-direction: column;
  text-align: center;
`;

const StyledHeader = styled.h1`
  font-size: 3em;
`;

const ToDo = () => {
  const [myVideos, setMyVideos] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSession();
        const name = data.data.name;
        const params = { name: name };
        const videoData = await getMyVideos(params);
        setMyVideos(videoData);
      } catch {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const videos = JSON.stringify(myVideos.data);

  return (
    <PatientLayout>
      <Wrapper>
        <StyledHeader>Mina övningar</StyledHeader>
        <ul>
          {myVideos?.data?.data.map((video) => {
            return (
              <li>
                <Link
                  to={`/watch?title=http://www.youtube.com/embed/${video.vidId}`}
                  key={video.vidId}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.vidId}/mqdefault.jpg`}
                  />
                  {video.vidTitle}
                  Du har gjort denna: {video.amountOfTimes} gånger
                </Link>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </PatientLayout>
  );
};

export default ToDo;
