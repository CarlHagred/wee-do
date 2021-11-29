import AdminLayout from "../../components/admin/AdminLayout";
import ContentContainer from "../../components/common/ContentContainer";

const UploadError = () => {
    return (
        <AdminLayout>
            <ContentContainer>
                <div>
                    <br />
                    <br />
                    <h1>Ett fel inträffade när videon skulle laddas upp!</h1>
                    <br />
                    <ul>
                        <br />
                    </ul>
                </div>
            </ContentContainer>
        </AdminLayout>
    );
};

export default UploadError;
