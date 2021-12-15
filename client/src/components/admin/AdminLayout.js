import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import AdminTheme from "../../themes/AdminTheme";
import AdminFooter from "./AdminFooter";
import AdminNavbar from "./AdminNavbar";

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const PageContainer = styled.div`
  flex: 1;
`;

const Layout = ({ children }) => {
  let url = "http://localhost:3000/admin";
  return (
    <PageWrapper>
      <ThemeProvider theme={AdminTheme}>
        {window.location.href === url ? null : <AdminNavbar />}
        <PageContainer>{children}</PageContainer>
        {window.location.href === url ? null : <AdminFooter />}
      </ThemeProvider>
    </PageWrapper>
  );
};

export default Layout;
