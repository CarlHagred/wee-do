import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./styled/NavBar";

const PageContainer = styled.div`
  position: relative;

  min-height: 100vh;

  margin: 0 auto;
  padding: 1rem 1rem 15rem 1rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Header />
        {children}
        <Footer />
      </PageContainer>
    </>
  );
};
export default Layout;
