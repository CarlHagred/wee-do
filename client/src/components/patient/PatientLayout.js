import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import PatientTheme from "../../themes/PatientTheme";
import Footer from "../common/Footer";
import PatientNavbar from "./PatientNavbar";

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
            <PatientNavbar />
            <PageContainer>
                {children}
                <Footer />
            </PageContainer>
        </ThemeProvider>
    );
};
export default Layout;
