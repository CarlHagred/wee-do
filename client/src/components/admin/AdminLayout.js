import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import AdminTheme from "../../themes/AdminTheme";
import Navbar from "./Navbar";

const PageContainer = styled.div`
  position: relative;

  min-height: 100vh;

  margin: 0 auto;
  padding: 1rem 1rem 15rem 1rem;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={AdminTheme}>
      <Navbar />
      <PageContainer>{children}</PageContainer>
    </ThemeProvider>
  );
};
export default Layout;