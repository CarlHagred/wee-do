import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import { loginAdmin } from "../../api";

import AdminTheme from "../../themes/AdminTheme";
import Button from "../../components/common/Button";
import UserInput from "../../components/common/UserInput";
import WdLogo from "../../components/images/WdLogo";
import RsLogo from "../../components/images/RsLogo";
import Icon from "../../components/common/Icons";

const StyledBody = createGlobalStyle`
  body {
    background-color: #F9F9F9;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const StyledContainerItem = styled.div`
  font-size: 20px;
  flex: 1;
`;

const StyledWrapper = styled(StyledContainerItem)`
  display: flex;
  max-width: 800px;
  border: 1px solid #bfc1bf;
  margin-top: 20vh;
  background-color: white;
`;

const StyledHeroContainer = styled(StyledContainerItem)`
  background: ${(props) => props.theme.palette.brand};
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const StyledLogo = styled(WdLogo)`
  width: 80%;
  margin: 20px;
`;

const StyledIcon = styled(Icon)``;

const StyledContentContainer = styled(StyledContainerItem)`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
`;

const StyledLoginHeader = styled(StyledContainerItem)`
  font-size: 2em;
  margin: 40px 0;
`;

const StyledLoginFooter = styled(StyledContainerItem)`
  margin-top: 40px;
  margin-bottom: 20px;
`;

const StyledUserInput = styled(UserInput)`
  text-align: left;
`;

const AdminLogin = () => {
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const handleSubmit = () => {
    console.log(`försöker logga in med ${loginName}`);
    const postData = {
      username: loginName,
      password: loginPassword,
    };

    loginAdmin(postData);
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

            <StyledContainerItem>
              <span id="adminError"></span>
              <StyledUserInput
                theme={AdminTheme}
                type="text"
                name="name"
                id="adminUsername"
                onChange={(e) => setLoginName(e.target.value)}
                placeholder="Användarnamn"
              />
              <StyledUserInput
                theme={AdminTheme}
                type="password"
                name="name"
                id="adminPassword"
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Lösenord"
                secureTextEntry={true}
              />
              <Button onClick={handleSubmit}>Logga in</Button>
            </StyledContainerItem>

            <StyledLoginFooter>
              <RsLogo width="92px" height="85px" alt="Region Skånes logotyp" />
            </StyledLoginFooter>
          </StyledContentContainer>
        </StyledWrapper>
      </ThemeProvider>
    </PageWrapper>
  );
};
export default AdminLogin;
