import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import AdminTheme from "../../themes/AdminTheme";
import { loginAdmin } from "../../api";

import Button from "../../components/common/Button";
import { UserInput } from "../../components/common/UserInput";
import WdLogo from "../../components/images/WdLogo";
import Icon from "../../components/common/Icons";
import { useHistory } from "react-router-dom";

const StyledBody = createGlobalStyle`
  @media (min-width: 740px) {
    body {
    background-color: #EFEFEF;
  }
  }
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const StyledContainerItem = styled.div`
  flex: 1;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 800px;
  border: 1px solid #bfc1bf;
  margin-top: 20vh;
  background-color: white;
  @media (max-width: 740px) {
    margin-top: 0;
    flex-direction: column;
    border: 0;
  }
`;

const StyledHeroContainer = styled.div`
  background: ${(props) => props.theme.palette.brand};
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  @media (max-width: 740px) {
    margin-top: 0;
  }
`;

const StyledLogo = styled(WdLogo)`
  width: 80%;
  margin: 20px 0;
`;

const StyledIcon = styled(Icon)`
  @media (max-width: 740px) {
    display: none;
  }
`;

const StyledContentContainer = styled.div`
  background: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
  margin-bottom: 8%;
`;

const StyledLoginHeader = styled.div`
  font-size: 2rem;
  margin: 40px 0;
`;

const AdminLogin = () => {
  let history = useHistory();
  localStorage.removeItem("isAuthenticatedPatient");
  let isCookie = localStorage.getItem("isAuthenticatedAdmin");
  if (isCookie !== null) {
    history.push("/adminpanel");
  }

  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmit = () => {
    const postData = {
      username: loginName.trim(),
      password: loginPassword.trim(),
    };
    loginAdmin(postData);
  };

  const listener = (event) => {
    let key = 13;
    if (event.keyCode === key) {
      handleSubmit();
    }
  };

  return (
    <PageWrapper>
      <StyledBody />
      <ThemeProvider theme={AdminTheme}>
        <StyledWrapper>
          <StyledHeroContainer>
            <StyledContainerItem>
              <StyledLogo fill="white" />
            </StyledContainerItem>

            <StyledContainerItem>
              <StyledIcon size="6em" name="admin_panel" fill="white" />
            </StyledContainerItem>
            <StyledContainerItem />
          </StyledHeroContainer>

          <StyledContentContainer>
            <StyledLoginHeader>Admin Login</StyledLoginHeader>

            <StyledContainerItem onKeyDown={listener}>
              <span id="adminError"></span>
              <UserInput
                theme={AdminTheme}
                type="text"
                name="name"
                id="adminUsername"
                onChange={(e) => setLoginName(e.target.value)}
                placeholder="Användarnamn"
              />
              <UserInput
                theme={AdminTheme}
                type="password"
                name="name"
                id="adminPassword"
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Lösenord"
                secureTextEntry={true}
              />
              <Button width="wide" onClick={handleSubmit}>
                Logga in
              </Button>
            </StyledContainerItem>
          </StyledContentContainer>
        </StyledWrapper>
      </ThemeProvider>
    </PageWrapper>
  );
};
export default AdminLogin;
