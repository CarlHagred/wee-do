import React from "react";
import { useState } from "react";
import Button from "../../components/common/Button";
import UserInput from "../../components/common/UserInput";
import Header from "../../components/common/Header";
import AdminTheme from "../../themes/AdminTheme";
import { loginAdmin } from "../../api";
import { ThemeProvider } from "styled-components";

const AdminLogin = () => {
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const handleSubmit = () => {
    console.log(`försöker logga in med ${loginName}`);
    const postData = {
      username: loginName,
      password: loginPassword, 
    };
    
    loginAdmin(postData)

  }
  return (
    <ThemeProvider theme={AdminTheme}>
      <Header />

      <h2>Logga in - Admin</h2>
      <br />
      <UserInput theme={AdminTheme}
         type="text" name="name" 
         id="login" 
         onChange={(e) => setLoginName(e.target.value)} 
         placeholder="Användarnamn"/>
      <UserInput theme={AdminTheme}
         type="text" name="name" 
         id="login" 
         onChange={(e) => setLoginPassword(e.target.value)} 
         placeholder="Lösenord"/>
      <Button onClick={handleSubmit}>Logga in som admin</Button>
    </ThemeProvider>
  );
};
export default AdminLogin;
