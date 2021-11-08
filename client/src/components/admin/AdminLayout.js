import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import AdminTheme from "../../themes/AdminTheme";
import Navbar from "./Navbar";

const PageContainer = styled.div`
  position: relative;

  min-height: 100vh;

  margin: 0 auto;
  padding: 1rem 1rem 15rem 1rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    background-color: #f9f9f9;
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={AdminTheme}>
      <PageContainer>{children}</PageContainer>
    </ThemeProvider>
  );
};
export default Layout;
