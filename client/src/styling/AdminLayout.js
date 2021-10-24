import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import AdminTheme from "./themes/AdminTheme";
import Navbar from "../components/admin/Navbar";

const PageContainer = styled.div`
  position: relative;

  min-height: 100vh;

  margin: 0 auto;
  padding: 1rem 1rem 15rem 1rem;
`;

// OBS! Navbar ska endast vara synlig efter login
// vilket måste hanteras på något sätt
// Ska vi ha någon footer för admin?
// Ska vi ha hjälpavsnitt och "om WeeDo"?

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={AdminTheme}>
      <Navbar />
      <PageContainer>{children}</PageContainer>
    </ThemeProvider>
  );
};
export default Layout;
