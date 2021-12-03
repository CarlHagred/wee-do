import AdminLayout from "../../components/admin/AdminLayout";
import ContentContainer from "../../components/common/ContentContainer";
import styled from "styled-components";
import Button from "../../components/common/Button";
import AdminTheme from "../../themes/AdminTheme";

const ErrorMessage = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 25px;
    margin-top: 100px;
    margin-bottom: 30px;
`

const goToUploadPage = () => {
    //window.location = "/admin/register/exercise";
    window.location = "/adminpanel"
}


const UploadError = () => {
    return (
        <AdminLayout>
            <ContentContainer>
                <div>
                    <ErrorMessage>Ett fel inträffade när videon skulle laddas upp!</ErrorMessage>
                    <Button theme={AdminTheme} onClick={goToUploadPage}>Tillbaka till startsidan</Button>
                </div>
            </ContentContainer>
        </AdminLayout>
    );
};

export default UploadError;
