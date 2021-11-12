import React from "react";

import AdminLayout from "../../components/admin/AdminLayout";
import UploadVideo from "../../components/admin/UploadVideo.js";
import ContentContainer from "../../components/common/ContentContainer";

const RegisterExercise = () => {
    return (
        <AdminLayout>
            <ContentContainer>
                <UploadVideo />
            </ContentContainer>
        </AdminLayout>
    );
};
export default RegisterExercise;
