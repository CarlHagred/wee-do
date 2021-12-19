import { useEffect, useState } from "react";
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
        <div>Is Loading: {isLoading.toString()}</div>
        <div>{videos}</div>
        <div>Is Error: {isError.toString()}</div>
      </Wrapper>
    </PatientLayout>
  );
};

export default ToDo;
