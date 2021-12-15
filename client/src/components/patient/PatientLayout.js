import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import PatientTheme from "../../themes/PatientTheme";
import PatientFooter from "./PatientFooter";
import PatientNavbar from "./PatientNavbar";

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const PageContainer = styled.div`
  flex: 1;
`;

const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <ThemeProvider theme={PatientTheme}>
        <PatientNavbar />
        <PageContainer>{children}</PageContainer>
        <PatientFooter />
      </ThemeProvider>
    </PageWrapper>
  );
};
export default Layout;
