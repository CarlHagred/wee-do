import React from "react";
import { useState } from "react";
import styled from "styled-components";

import AdminTheme from "../../themes/AdminTheme";
import { loginAdmin } from "../../api";

import Button from "../../components/common/Button";
import UserInput from "../../components/common/UserInput";
import WdLogo from "../../components/images/WdLogo";
import AdminLayout from "../../components/admin/AdminLayout";
import RsLogo from "../../components/images/RsLogo";
import Icon from "../../components/common/Icons";

const StyledHeader = styled.h1`
  font-size: 2em;
  margin: 40px 0;
  text-align: center;
`;

const LoginWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 10rem;
    background-color: white;
    border: 1px solid #bfc1bf;
    height: 420px;
  }
`;

const PlaceholderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.palette.brand};
  margin: -1rem -1rem 0 -1rem;
  padding: 5%;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const StyledWdLogo = styled(WdLogo)`
  width: 10em;
  margin: 0;
  @media (min-width: 768px) {
    width: 15em;
    margin: 20px 40px;
  }
`;

const StyledIcon = styled(Icon)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 0 20px;
    width: 400px;
  }
`;

const StyledUserInput = styled(UserInput)`
  align-self: center;
  max-width: 350px;
`;

const StyledButton = styled(Button)`
  align-self: center;
  max-width: 350px;
`;

const RsLogoContainer = styled.div`
  align-self: center;
  margin-top: 50px;
  @media (max-width: 768px) {
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
  }
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
    <AdminLayout>
      <LoginWrapper>
        <PlaceholderContainer>
          <StyledWdLogo fill="white" />
          <StyledIcon name="admin_panel" size="9em" fill="white" />
        </PlaceholderContainer>
        <LoginContainer>
          <StyledHeader>Admin Login</StyledHeader>
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
          <StyledButton onClick={handleSubmit}>Logga in</StyledButton>
          <RsLogoContainer>
            <RsLogo width="92px" height="85px" alt="Region Skånes logotyp" />
          </RsLogoContainer>
        </LoginContainer>
      </LoginWrapper>
    </AdminLayout>
  );
};
export default AdminLogin;
