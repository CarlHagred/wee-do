import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import PatientTheme from "../../themes/PatientTheme";
import Footer from "../common/Footer";
import PatientNavbar from "./PatientNavbar";

const PageWrapper = styled.body`
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
                <Footer />
            </ThemeProvider>
        </PageWrapper>
    );
};
export default Layout;
