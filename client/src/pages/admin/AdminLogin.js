import React from "react";
import { useState } from "react";
import Button from "../../components/common/Button";
import UserInput from "../../components/common/UserInput";
import AdminTheme from "../../themes/AdminTheme";
import { loginAdmin } from "../../api";
import { ThemeProvider } from "styled-components";
import Footer from "../../components/common/Footer";
import WdLogo from "../../components/images/WdLogo";
import AdminLayout from "../../components/admin/AdminLayout"

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
    <AdminLayout>
    <ThemeProvider theme={AdminTheme}>
      <WdLogo width="100%"/>
      <br />
      <span id="adminError"></span>
      <UserInput theme={AdminTheme}
         type="text" name="name" 
         id="adminUsername" 
         onChange={(e) => setLoginName(e.target.value)} 
         placeholder="Användarnamn"/>
      <UserInput theme={AdminTheme}
         type="text" name="name" 
         id="adminPassword" 
         onChange={(e) => setLoginPassword(e.target.value)} 
         placeholder="Lösenord"/>
      <Button onClick={handleSubmit}>Logga in</Button>
      <Footer/>
    </ThemeProvider>
    </AdminLayout>
  );
};
export default AdminLogin;
