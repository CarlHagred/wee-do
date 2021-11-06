import styled from "styled-components";
import Footer from "../common/Footer";
import { ThemeProvider } from "styled-components";
import PatientTheme from "../../themes/PatientTheme";

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
  padding: 1rem 1rem 15rem 1rem;
  text-align: center;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={PatientTheme}>
      <PageContainer>
        {children}
        <Footer />
      </PageContainer>
    </ThemeProvider>
  );
};
export default Layout;
